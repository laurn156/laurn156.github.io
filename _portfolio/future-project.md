---
title: "LEAP Hand for In-Hand Manipulation"
excerpt: "Assembled and calibrated the LEAP Hand and deployed a sim-to-real policy for in-hand cube rotation, with ongoing work on OptiTrack-based cube reorientation."
collection: portfolio
permalink: /portfolio/leap-hand/
redirect_from:
  - /portfolio/future-project/
author_profile: false
header:
  teaser: hand-main.png
---

## Overview

This project focuses on dexterous manipulation with the open-source LEAP Hand developed at Carnegie Mellon University. The hand was assembled and calibrated, and a sim-to-real policy was integrated and deployed onto the physical hardware to achieve in-hand cube rotation. Ongoing work aims to reproduce the cube reorientation task from the [MuJoCo Playground paper](https://arxiv.org/abs/2502.08844), using a four-camera OptiTrack setup for real-time pose tracking.

<img class="project-overview-image" src="/images/hand-main.png" alt="LEAP Hand holding a red cube on the physical hardware">

## Implementation

- 3D printed and assembled the LEAP Hand, including motor setup and joint calibration.
- Integrated and deployed a sim-to-real manipulation policy onto the physical hardware.
- Tuned PID gains and corrected motor offsets to achieve in-hand cube rotation.

## Current Work

- Developing a four-camera OptiTrack setup to track the cube's pose during manipulation.
- Working toward reorienting the cube to a generated target one face turn away, following the task presented in the [MuJoCo Playground paper](https://arxiv.org/abs/2502.08844).

## Project Gallery

<div class="project-gallery">
  <figure>
    <img src="/images/hand-assembled.png" alt="Assembled LEAP Hand showing the 3D-printed structure and motors" loading="lazy">
    <figcaption>Assembled LEAP Hand</figcaption>
  </figure>
  <figure>
    <img src="/images/hand-simulation.png" alt="Parallel simulated LEAP Hands manipulating cubes toward target orientations" loading="lazy">
    <figcaption>Cube Reorientation in Simulation</figcaption>
  </figure>
  <figure style="grid-column: 1 / -1;">
    <video autoplay loop muted playsinline controls preload="metadata" aria-label="LEAP Hand in-hand cube rotation demonstration" style="display: block; width: 100%; max-height: 560px; object-fit: contain; background: #111;">
      <source src="/images/hand-cube-rotate.mp4" type="video/mp4">
      Your browser does not support embedded video. <a href="/images/hand-cube-rotate.mp4">Watch the cube rotation demonstration.</a>
    </video>
    <figcaption>In-Hand Cube Rotation — Physical Demonstration</figcaption>
  </figure>
</div>

Camera setup and reorientation results will be added as that work progresses.

## Acknowledgements

This project is being developed in collaboration with Edward Osun and Angel Campos under the guidance of Dr. Lingfeng Tao at Kennesaw State University.
