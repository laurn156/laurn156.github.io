---
title: "Sensing Unit V2"
excerpt: "Designed and fabricated modular sensing unit enclosures for the PLOT house at Kennesaw State University, with interchangeable camera configurations and a mounting attachment for the Unitree R1 humanoid robot."
collection: portfolio
permalink: /portfolio/sensing-unit-v2/
author_profile: false
# header:
#   teaser: sensing-unit-main.png
---

## Overview

The Sensing Unit V2 is being developed for the [Prototype Living of Tomorrow (PLOT)](https://plotinnovation.com/about) project at Kennesaw State University, which explores intelligent technologies to improve everyday living, wellness, and accessibility. The units are designed to collect environmental and visual data across different rooms of the PLOT house, with configurations for both stationary deployment and mounting on a humanoid robot. My contributions focus on the mechanical design, fabrication, and physical integration of the sensing hardware.

<!-- <img class="project-overview-image" src="/images/sensing-unit-main.png" alt="Complete Sensing Unit V2"> -->

## Hardware Configuration

The sensing unit incorporates components for environmental monitoring, visual perception, and onboard processing.

- **Computing & Audio:** NVIDIA Jetson Nano, ReSpeaker XVF3800 USB 4-Mic Array, and a USB computer speaker
- **Environmental & Motion Sensors:** BNO085 9-DOF orientation sensor, TSL2591 ambient light sensor, and BME688 temperature, humidity, pressure, and gas sensor
- **Display:** LCD screen for local monitoring and interaction

## Camera Configurations

The unit supports four Luxonis camera configurations:

- OAK Thermal
- OAK 4 Pro AF
- OAK ToF
- OAK-D Long Range

Custom enclosures were developed for each camera configuration, including variations that pair the Luxonis cameras with a Seek Thermal camera. All configurations share a common mounting interface with the two lower tiers of the sensing unit.

## Mechanical Design & Fabrication

- Designed a three-tier enclosure assembly in SOLIDWORKS, connected by adjustable hinge mounts that allow each section to be positioned at different angles
- Designed interchangeable camera enclosures with standardized mounting features, allowing different camera configurations to be installed without modifying the rest of the assembly
- Designed mounting features for the internal electronics, sensors, and LCD display while accounting for wiring and space constraints

## Humanoid Robot Integration

Designed a custom rail-based mounting attachment to secure the sensing units to the back of a Unitree R1 humanoid robot. This configuration is intended to allow the robot to carry the sensing hardware while navigating the PLOT house, supporting mobile environmental data collection.

<!--
## Project Gallery

<div class="project-gallery">
  <figure>
    <img src="/images/sensing-unit-complete.png" alt="Complete Sensing Unit V2 assembly" loading="lazy">
    <figcaption>Complete Sensing Unit V2</figcaption>
  </figure>
  <figure>
    <img src="/images/sensing-unit-cad.png" alt="SOLIDWORKS CAD assembly of the sensing unit" loading="lazy">
    <figcaption>SOLIDWORKS CAD Assembly</figcaption>
  </figure>
  <figure>
    <img src="/images/sensing-unit-cameras.png" alt="Camera enclosure variations for the Luxonis and Seek Thermal cameras" loading="lazy">
    <figcaption>Camera Enclosure Variations</figcaption>
  </figure>
  <figure>
    <img src="/images/sensing-unit-internals.png" alt="Internal hardware layout of the sensing unit" loading="lazy">
    <figcaption>Internal Hardware Layout</figcaption>
  </figure>
  <figure>
    <img src="/images/sensing-unit-r1-mount.png" alt="Rail-based mounting attachment for the Unitree R1" loading="lazy">
    <figcaption>Unitree R1 Mounting Attachment</figcaption>
  </figure>
  <figure>
    <img src="/images/sensing-unit-on-r1.png" alt="Sensing unit mounted on the back of the Unitree R1 humanoid robot" loading="lazy">
    <figcaption>Sensing Unit Mounted on R1</figcaption>
  </figure>
</div>
-->

## Acknowledgements

This project is conducted under the guidance of Dr. Razvan Voicu and Dr. Md. Hazrat Ali at Kennesaw State University.
