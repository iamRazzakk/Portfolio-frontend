"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { gsap } from "gsap"

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 90

      // Color - blue to purple gradient
      if (i % 3 === 0) {
        colorArray[i] = 0.1 + Math.random() * 0.2 // R
        colorArray[i + 1] = 0.3 + Math.random() * 0.3 // G
        colorArray[i + 2] = 0.8 + Math.random() * 0.2 // B
      }
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add connections between particles (neural network effect)
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x3a56e8,
      transparent: true,
      opacity: 0.15,
    })

    const linesGroup = new THREE.Group()
    scene.add(linesGroup)

    // Create connections between nearby particles
    const connectionsCount = 300
    for (let i = 0; i < connectionsCount; i++) {
      const index1 = Math.floor(Math.random() * particlesCount)
      const index2 = Math.floor(Math.random() * particlesCount)

      const x1 = posArray[index1 * 3]
      const y1 = posArray[index1 * 3 + 1]
      const z1 = posArray[index1 * 3 + 2]

      const x2 = posArray[index2 * 3]
      const y2 = posArray[index2 * 3 + 1]
      const z2 = posArray[index2 * 3 + 2]

      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2))

      // Only connect if they're close enough
      if (distance < 15) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(x1, y1, z1),
          new THREE.Vector3(x2, y2, z2),
        ])
        const line = new THREE.Line(lineGeometry, linesMaterial)
        linesGroup.add(line)
      }
    }

    // Mouse move event
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particlesMesh.rotation.x = elapsedTime * 0.05
      particlesMesh.rotation.y = elapsedTime * 0.03

      // Rotate lines
      linesGroup.rotation.x = elapsedTime * 0.05
      linesGroup.rotation.y = elapsedTime * 0.03

      // Mouse interaction
      gsap.to(particlesMesh.rotation, {
        x: particlesMesh.rotation.x + mousePosition.current.y * 0.05,
        y: particlesMesh.rotation.y + mousePosition.current.x * 0.05,
        duration: 2,
      })

      gsap.to(linesGroup.rotation, {
        x: linesGroup.rotation.x + mousePosition.current.y * 0.05,
        y: linesGroup.rotation.y + mousePosition.current.x * 0.05,
        duration: 2,
      })

      // Render
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
}
