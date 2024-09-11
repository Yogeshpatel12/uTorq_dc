"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const FirstDay: React.FC = () => {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p111.png"
                  title=""
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>1. SPRING LOADED FAIL SAFE BRAKE</h3>

                <ul>
                  <li>Type - USB & UMB (Normally On)</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 2 Nm-1600 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              The Spring Loaded Fail Safe Brake is engineered for applications
              that demand maximum safety and reliability, offering a secure and
              efficient braking solution in situations where failure is not an
              option. This brake system is designed to automatically engage when
              power is lost or in emergency conditions, ensuring the immediate
              and safe halt of machinery. Built to deliver consistent
              performance in industrial environments, it is particularly suited
              for cranes, hoists, wind turbines, and heavy-duty machinery. At
              the heart of this brake system is the spring-loaded mechanism,
              which applies the braking force when de-energized, offering a
              fail-safe operation. The robust construction ensures long-lasting
              durability and performance, even under extreme conditions. With
              minimal maintenance requirements, the Spring Loaded Fail Safe
              Brake provides cost-effective, reliable safety in critical
              applications.<br></br> Key features of the Spring Loaded Fail Safe Brake
              include: <br></br>1. Fail-Safe Design: Automatically engages when power is
              lost or in emergencies, providing reliable safety in critical
              situations. <br></br>2. Spring-Loaded Mechanism: Utilizes mechanical springs
              to apply braking force, ensuring operation even without electrical
              power. <br></br>3. High Torque Capability: Offers powerful braking force to
              halt heavy machinery quickly and efficiently.<br></br>4. Durable
              Construction: Built from high-quality materials to endure harsh
              industrial conditions, ensuring long-lasting performance.<br></br>5. Low
              Maintenance: Designed for minimal maintenance, reducing
              operational costs and ensuring reliable, continuous operation.<br></br>6.
              Compact and Versatile: The compact design allows for easy
              installation in various applications without sacrificing
              performance.<br></br>7. Wide Range of Applications: Ideal for industries such
              as material handling, energy, automotive, and manufacturing, where
              safety is paramount.
            </p>

            {/* <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
             
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div> */}
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p30.png"
                  title=""
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>2. FLANGE MOUNTED BRAKES</h3>

                <ul>
                  <li>Type - UFB (Normally Off)</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 15 - 500 Nm
                  </li>
                  <li>DC voltage : 24/96/190</li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Flange Mounted Brakes are designed for maximum performance and
              durability, offering reliable stopping power across various
              industrial applications. These brakes are specifically engineered
              to mount easily onto flanges, making them ideal for use in
              machines and equipment where space is limited. Crafted with
              precision, the Flange Mounted Brakes provide excellent torque
              control, ensuring smooth and consistent braking operations. They
              are built to handle demanding environments, offering low
              maintenance requirements, long service life, and high resistance
              to wear and tear.<br></br> Key features of our Flange Mounted
              Brakes include: High Torque Output: Capable of delivering strong
              braking force to meet heavy-duty operational demands.<br></br>{" "}
              Compact Design: Space-saving construction for easy integration
              into existing systems.<br></br> Durability: Built with robust
              materials to withstand harsh industrial environments.<br></br>{" "}
              Easy Installation: Mounts directly to the flange, minimizing
              installation time and complexity.<br></br> Low Maintenance:
              Designed for longevity with minimal upkeep required.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7"></div>

              {/* <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div> */}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p20.png"
                  title="Steven Lucy"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>3. ALUMINIUM DISC LINER</h3>

                <ul>
                  {/* <li>Type - UFC (Normally Off)</li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 15 - 500 Nm
                  </li>
                  {/* <li>DC voltage : 24/96/190</li> */}
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Aluminium Disc Liners are lightweight, durable components designed
              to protect and enhance the performance of braking systems. Known
              for their excellent heat dissipation and corrosion resistance,
              they ensure smoother braking and extended service life for
              industrial applications. These liners are ideal for
              high-performance environments, offering low maintenance and
              superior reliability across a range of heavy-duty equipment.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7"></div>

              {/* <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div> */}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p40.png"
                  title="Steven Lucy"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>4. CLUTH AND BRAKE COMBINATION</h3>

                <ul>
                  <li>Type - UCB </li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 15 - 500 Nm
                  </li>
                  <li>DC voltage : 24/96/190</li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Clutch and Brake Combination units are engineered for
              applications that require seamless transition between power
              transmission and braking in a single, compact system. These
              innovative units provide smooth, reliable engagement and
              disengagement of power while offering precise stopping capability,
              making them ideal for high-performance machinery across various
              industries. Designed to simplify operations, the Clutch and Brake
              Combination minimizes mechanical wear and maximizes efficiency by
              combining the clutch and brake mechanisms into one space-saving
              assembly. This integration not only enhances machine performance
              but also reduces downtime and maintenance efforts, ensuring
              optimal functionality and durability in demanding conditions.{" "}
              <br></br> Key features of our Clutch and Brake Combination units
              include: Integrated Design: Combines clutch and brake functions in
              a single unit for streamlined operations.<br></br> Smooth
              Engagement & Braking: Facilitates accurate torque transfer and
              immediate stopping for better control. <br></br> Compact &
              Space-Saving: Ideal for machinery with limited space, ensuring
              ease of installation and integration.<br></br> High Durability:
              Made from premium materials to ensure long-lasting performance,
              even in heavy-duty industrial environments. <br></br> Fast
              Response Time: Quick and efficient activation of both clutch and
              brake functions, reducing lag and enhancing precision.<br></br>{" "}
              Low Maintenance: Engineered for extended service life, requiring
              minimal maintenance to keep systems running smoothly.
            </p>

            {/* <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7"></div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div> */}
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p70.png"
                  title="Steven Lucy"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>5. BRAKE MOTORS</h3>

                <ul>
                  <li>Type - UBM </li>
                  <li>
                    <i className="icofont-wall-clock"></i> Speed : 1440 RPM
                  </li>
                  <li>Motor Voltages : 415 Vac</li>
                  <li>Power : 0.25 hp - 20 hp </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Brake Motors are designed to provide precise stopping control
              and efficient power transmission in a single unit, offering
              enhanced safety and reliability for a wide range of industrial
              applications. These motors are equipped with an integrated braking
              system that ensures immediate and controlled stopping of the motor
              shaft, making them ideal for applications requiring rapid and
              secure deceleration. Built for durability and performance, Brake
              Motors combine high torque capability with robust braking power,
              making them suitable for heavy-duty equipment and machinery in
              industries such as material handling, automation, and
              manufacturing. With a compact design, these motors are easy to
              install, saving both space and time while ensuring smooth
              operation.<br></br> Key features of our Brake Motors include:
              Integrated Brake System: Ensures safe, reliable stopping power
              without the need for additional external components.<br></br> High
              Torque Output: Delivers exceptional torque performance for
              efficient operation under load. <br></br> Compact & Versatile
              Design: Optimized for space-saving installation and easy
              integration into a variety of systems.<br></br>
              Durability: Manufactured with top-quality materials to withstand
              challenging industrial environments. <br></br> Fast Stopping Time:
              Immediate response time for accurate and safe stopping, improving
              overall machine safety.<br></br> Low Maintenance: Designed for
              long service life with minimal maintenance required, reducing
              downtime and operational costs.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7"></div>

              {/* <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div> */}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p60.png"
                  title=""
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>6. TRANSFORMERS AND RECTIFIERS</h3>

                <ul>
                  <li>Type - UFC </li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 15 - 500 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Transformers and Rectifiers are designed to deliver
              consistent, reliable power conversion for industrial applications
              requiring stable voltage and current control. These devices play a
              crucial role in converting electrical energy into the desired
              voltage or current, providing high efficiency and performance in
              systems that require both AC-to-DC and DC-to-AC conversion. The
              transformers are engineered to step up or step down voltages with
              precision, ensuring optimal power distribution and protection of
              sensitive equipment. Coupled with our high-quality rectifiers,
              which efficiently convert alternating current (AC) to direct
              current (DC), this combination provides a stable and uninterrupted
              power supply for various machinery and equipment.<br></br> Key
              features of our Transformers and Rectifiers include: High
              Efficiency: Delivers superior power conversion with minimal
              losses, ensuring maximum energy efficiency. <br></br> Reliable
              Power Control: Provides stable voltage and current control,
              protecting connected equipment from fluctuations.<br></br> Durable
              Construction: Built with robust materials designed to withstand
              harsh industrial environments and continuous operation.<br></br>{" "}
              Compact Design: Space-saving construction for easy integration
              into control panels and electrical systems.<br></br> Safety
              Features: Equipped with overload protection and thermal management
              systems to prevent overheating and ensure long-term reliability.
              <br></br> Versatile Applications: Suitable for various industries,
              including manufacturing, automation, material handling, and more.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p80.png"
                  title=""
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>7. ELECTROHYDRAULIC THRUSTER BRAKE</h3>

                <ul>
                  {/* <li>Type - UFC (Normally Off)</li> */}
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 400 mm
                  </li>
                  <li>Weight : 68 Kg</li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our Electrohydraulic Thruster Brakes are designed for
              high-performance braking in demanding industrial applications,
              offering a reliable and powerful solution for controlling and
              stopping machinery. These brakes use an advanced electrohydraulic
              mechanism to generate braking force, ensuring smooth, consistent,
              and precise stopping power. Their robust design makes them ideal
              for heavy-duty equipment in industries such as material handling,
              cranes, hoists, and conveyor systems. The combination of hydraulic
              force and electrical control allows for fast response times and
              accurate braking under various load conditions. Built for
              durability, our Electrohydraulic Thruster Brakes are engineered to
              withstand harsh industrial environments while maintaining minimal
              maintenance needs and long service life.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="abcd">
                <Image
                  src="\images\p011.png"
                  title=""
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>8. NMRV GEAR BOX</h3>

                <ul>
                  <li>Power : 0.5KW</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Gear Type : Worm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Our NMRV Gear Box is an efficient and reliable power transmission
              solution, designed for a wide range of industrial applications.
              Known for its compact and versatile design, the NMRV gear box
              offers exceptional performance in environments where space is
              limited and high torque is required. This gear box is ideal for
              use in conveyors, automation systems, material handling equipment,
              and various other industrial setups requiring smooth and
              consistent torque transmission. The NMRV Gear Box features a worm
              gear design, ensuring smooth operation with minimal noise and
              vibration. It is built to handle torque ratings ranging from 15 Nm
              to 500 Nm, making it suitable for both light and heavy-duty
              applications. With a UFC (Normally Off) configuration, the gear
              box is designed for maximum operational efficiency, providing
              reliable performance when power is needed.<br></br> Key features
              of our NMRV Gear Box include: Torque Range: Capable of handling
              torque loads from 15 Nm to 500 Nm, offering versatility for
              various applications.<br></br> UFC Design: The Normally Off
              configuration ensures energy savings by activating only when
              needed, reducing power consumption. <br></br>High Efficiency:
              Delivers smooth, efficient power transmission with low energy
              loss, ensuring minimal maintenance and extended service life.{" "}
              <br></br>Durable Construction: Made from high-quality materials,
              the gear box is built to withstand harsh industrial environments
              and prolonged use.<br></br> Compact Size: Space-saving design
              allows for easy installation in tight or confined areas, making it
              ideal for retrofitting existing systems.
              <br></br>Low Noise & Vibration: The worm gear mechanism ensures
              quieter operation compared to traditional gear systems, providing
              a more comfortable work environment. <br></br>Versatile
              Application: Suitable for conveyors, hoists, material handling
              systems, and automation machinery across various industries.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <Image
                src="https://unitorq.in/img/product-9.png"
                title="Pnuematic Brakes"
                alt="Author"
                width={150}
                height={150}
              />

              <div className="schedule-info">
                <h3>Pnuematic Brakes</h3>

                <ul>
                  <li>Type - UPNB</li>
                  <li>
                    <i className="icofont-wall-clock"></i>Torque : 15 Nm-100 Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p>
            
            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem> */}

        {/* <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <Image
                src="https://unitorq.in/img/product-13.png"
                title="Hydraulic Brakes"
                alt="Hydraulic Brakesr"
                width={150}
                height={150}
              />

              <div className="schedule-info">
                <h3>Hydraulic Brakes</h3>

                <ul>
                  <li>Type - UHB</li>
                  <li>
                    <i className="icofont-wall-clock"></i> Torque : 50 Nm-2000
                    Nm
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took Link galley of
              type and scrambled it to make Link type specimen book. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took Link galley of type and
              scrambled it to make Link type specimen book.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem> */}
      </Accordion>
    </>
  );
};

export default FirstDay;
