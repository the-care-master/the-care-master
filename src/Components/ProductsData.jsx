export const categories = [
    "All Products",
    "Hospital Beds",
    "Mobility Solutions",
    "Respiratory Care",
    "Patient Care Equipment",
    "OT Equipment",
];

export const categoryDescriptions = {
    "All Products":
        "Explore our complete range of healthcare and medical equipment designed to support hospitals, clinics, rehabilitation centers and home care environments. From advanced hospital beds and mobility solutions to respiratory care devices and patient care equipment, our products are built to enhance patient comfort, improve caregiver efficiency and meet modern healthcare standards.",

    "Hospital Beds":
        "Our hospital beds are designed to provide maximum comfort, safety and support for patients while making caregiving easier for healthcare professionals. Suitable for hospitals, nursing homes, rehabilitation centers and home care settings, these beds combine durability, functionality and advanced features to support recovery and long-term patient care.",

    "Mobility Solutions":
        "Promote independence and improve quality of life with our range of mobility solutions. From electric wheelchairs and mobility scooters to patient shifters and transfer aids, our products are designed to provide safe, reliable and comfortable mobility support for patients, elderly individuals and people with limited movement.",

    "Respiratory Care":
        "Our respiratory care equipment is designed to provide effective breathing support and oxygen therapy for patients with respiratory conditions. Featuring oxygen concentrators, HFNC units, pulse oximeters and suction machines, these products help healthcare providers deliver dependable respiratory care in hospitals, clinics and home settings.",

    "Patient Care Equipment":
        "Enhance patient comfort and healthcare efficiency with our patient care equipment range. Including examination couches, stretchers, syringe pumps and other essential medical solutions, these products are engineered to support accurate treatment, patient safety and smooth healthcare operations.",

    "OT Equipment":
        "Our operating theatre and hospital utility equipment are manufactured to meet the demands of modern healthcare facilities. From Mayo trolleys and crash carts to stainless steel utility trolleys, these products offer durability, hygiene and functionality, ensuring healthcare professionals have reliable equipment for daily clinical and surgical procedures.",
};

export const products = [
    // --- Category: Hospital Beds ---
    {
        id: 1,
        slug: "automatic-home-care-bed",
        name: "Automatic Home Care Bed",
        category: "Hospital Beds",
        image: "/images/products/automatic-home-care-bed.webp",
        description: "An automatic home care bed is an essential solution for individuals who require comfort, medical support, and ease of movement within their home environment."
    },
    {
        id: 2,
        slug: "recliner-motorized-bed",
        name: "Recliner Motorized Bed",
        category: "Hospital Beds",
        image: "/images/products/recliner-motorized-bed.webp",
        description: "Recliners and motorized beds have become essential solutions for comfort, relaxation, and medical support in modern homes."
    },
    {
        id: 3,
        slug: "functional-rehabilitation-therapy-bed",
        name: "Functional Rehabilitation Therapy Bed",
        category: "Hospital Beds",
        image: "/images/products/functional-rehabilitation-therapy-bed.webp",
        description: "The Functional Rehabilitation Therapy Bed is an advanced medical support device designed to assist patients during recovery, physiotherapy, and long-term rehabilitation."
    },
    {
        id: 4,
        slug: "fowler-bed-automatic-and-manual",
        name: "Fowler Bed (Automatic & Manual)",
        category: "Hospital Beds",
        image: "/images/products/fowler-bed.webp", // [IMAGE REQUIRED]
        description: "Designed for hospital wards and long-term patient care, available in both automatic motorized and manual hand-crank options for backrest and knee-rest adjustments."
    },
    {
        id: 5,
        slug: "icu-bed-automatic-and-manual",
        name: "ICU Bed (Automatic & Manual)",
        category: "Hospital Beds",
        image: "/images/products/icu-bed.webp", // [IMAGE REQUIRED]
        description: "Multi-functional ICU bed offering Trendelenburg, reverse Trendelenburg, height adjustment, and tilting functions for critical care environments."
    },
    {
        id: 6,
        slug: "semi-fowler-bed-automatic-and-manual",
        name: "Semi Fowler Bed (Automatic & Manual)",
        category: "Hospital Beds",
        image: "/images/products/semi-fowler-bed.webp", // [IMAGE REQUIRED]
        description: "Durable medical bed with single position backrest elevation, ideal for basic hospital wards and home nursing care."
    },
    {
        id: 7,
        slug: "attendant-bed",
        name: "Attendant Bed",
        category: "Hospital Beds",
        image: "/images/products/attendant-bed.webp", // [IMAGE REQUIRED]
        description: "Comfortable and durable attendant bed designed for patient relatives and caregivers staying overnight in hospital rooms."
    },

    // --- Category: OT Equipment ---
    {
        id: 8,
        slug: "medical-gas-pipeline-system",
        name: "Medical Gas Pipeline System (MGPS)",
        category: "OT Equipment",
        image: "/images/products/mgps.webp", // [IMAGE REQUIRED]
        description: "Centralized medical gas piping solution delivering oxygen, nitrous oxide, and medical air safely across operating theaters and critical care units."
    },
    {
        id: 9,
        slug: "modular-operation-theatre",
        name: "Modular Operation Theatre",
        category: "OT Equipment",
        image: "/images/products/modular-operation-theatre.webp", // [IMAGE REQUIRED]
        description: "A modern, hygienic, and pre-engineered surgical suite designed to maintain strict airflow, sterile conditions, and ergonomic surgical layouts."
    },
    {
        id: 10,
        slug: "ot-table",
        name: "OT Table",
        category: "OT Equipment",
        image: "/images/products/ot-table.webp", // [IMAGE REQUIRED]
        description: "Surgical operation table with adjustable multi-positioning capabilities suited for general and specialized surgical procedures."
    },
    {
        id: 11,
        slug: "ot-light",
        name: "OT Light",
        category: "OT Equipment",
        image: "/images/products/ot-light.webp", // [IMAGE REQUIRED]
        description: "Advanced shadowless LED surgical operating light providing high intensity illumination and color rendering for precision surgeries."
    },
    {
        id: 12,
        slug: "laparoscopic-monitor-trolley",
        name: "Laparoscopic Monitor Trolley",
        category: "OT Equipment",
        image: "/images/products/laparoscopic-monitor-trolley.webp", // [IMAGE REQUIRED]
        description: "Heavy-duty multi-tier trolley designed to hold laparoscopic camera units, monitors, light sources, and insufflators securely."
    },
    {
        id: 13,
        slug: "mayo-ss-trolley",
        name: "Mayo SS Trolley",
        category: "OT Equipment",
        image: "/images/products/mayo-ss-trolley.webp",
        description: "The Mayo SS Trolley is manufactured using high-quality stainless steel, offering excellent durability for holding surgical instruments during operation."
    },
    {
        id: 14,
        slug: "crash-cart-trolley",
        name: "Crash Cart Trolley",
        category: "OT Equipment",
        image: "/images/products/crash-cart-trolley.webp",
        description: "Essential emergency trolley designed with stainless steel frame to hold emergency medicines, defibrillators, and life support apparatus."
    },
    {
        id: 15,
        slug: "ss-frame-trolley",
        name: "SS Frame Trolley",
        category: "OT Equipment",
        image: "/images/products/ss-frame-trolley.webp",
        description: "Versatile stainless steel utility trolley with smooth caster wheels and organized shelves for clinical supply management."
    },
    {
        id: 16,
        slug: "scrub-station-single-and-double-way",
        name: "Scrub Station (Single Way & Double Way)",
        category: "OT Equipment",
        image: "/images/products/scrub-station.webp", // [IMAGE REQUIRED]
        description: "Surgical hand washing scrub station made with high-grade stainless steel featuring sensor-operated or knee-touch water and soap dispensers."
    },

    // --- Category: Mobility Solutions ---
    {
        id: 17,
        slug: "electric-motorized-wheelchair",
        name: "Electric Motorized Wheelchair",
        category: "Mobility Solutions",
        image: "/images/products/electric-motorized-wheelchair.webp",
        description: "High-quality Electric Motorized Aluminium Wheelchair designed to provide comfort, mobility, and independence."
    },
    {
        id: 18,
        slug: "electric-travel-wheelchair",
        name: "Electric Travel Wheelchair",
        category: "Mobility Solutions",
        image: "/images/products/electric-travel-wheelchair.webp",
        description: "Compact and foldable electric wheelchair ideal for travel and effortless movement."
    },
    {
        id: 19,
        slug: "mobility-scooter",
        name: "Mobility Scooter",
        category: "Mobility Solutions",
        image: "/images/products/mobility-scooter.webp",
        description: "Battery-powered mobility scooter for effortless travel over indoor and outdoor terrain."
    },
    {
        id: 20,
        slug: "patient-shifter",
        name: "Patient Shifter",
        category: "Mobility Solutions",
        image: "/images/products/patient-shifter.webp",
        description: "Safe patient transfer solution to shift bedridden or non-ambulatory individuals with ease."
    },
    {
        id: 21,
        slug: "wheelchair-ms-and-ss",
        name: "Manual Wheelchair (MS & SS)",
        category: "Mobility Solutions",
        image: "/images/products/wheelchair-ms-ss.webp", // [IMAGE REQUIRED]
        description: "Sturdy manual wheelchair available in Mild Steel (MS) powder-coated or Stainless Steel (SS) frames for smooth mobility."
    },

    // --- Category: Respiratory Care ---
    {
        id: 22,
        slug: "oxygen-concentrator",
        name: "Oxygen Concentrator",
        category: "Respiratory Care",
        image: "/images/products/oxygen-concentrator.webp",
        description: "Delivers continuous high-purity medical oxygen for respiratory support."
    },
    {
        id: 23,
        slug: "hfnc-unit",
        name: "HFNC Unit",
        category: "Respiratory Care",
        image: "/images/products/hfnc-unit.webp",
        description: "High Flow Nasal Cannula system delivering heated and humidified oxygen air mix."
    },
    {
        id: 24,
        slug: "pulse-oximeter",
        name: "Pulse Oximeter",
        category: "Respiratory Care",
        image: "/images/products/pulse-oximeter.webp",
        description: "Compact digital fingertip oximeter to monitor pulse rate and blood oxygen levels (SpO2)."
    },
    {
        id: 25,
        slug: "suction-machine",
        name: "Suction Machine",
        category: "Respiratory Care",
        image: "/images/products/suction-machine.webp",
        description: "Reliable medical suction unit designed for clearing airway fluids and secretions."
    },
    {
        id: 26,
        slug: "cylinder-trolley",
        name: "Cylinder Trolley",
        category: "Respiratory Care",
        image: "/images/products/cylinder-trolley.webp", // [IMAGE REQUIRED]
        description: "Safe transport trolley designed specifically for holding B-type and D-type medical oxygen cylinders securely."
    },

    // --- Category: Patient Care Equipment ---
    {
        id: 27,
        slug: "examination-couch-deluxe",
        name: "Examination Couch Deluxe",
        category: "Patient Care Equipment",
        image: "/images/products/examination-couch-deluxe.webp",
        description: "Premium medical examination table designed for outpatient departments and clinics."
    },
    {
        id: 28,
        slug: "stretcher-with-mattress",
        name: "Stretcher With Mattress",
        category: "Patient Care Equipment",
        image: "/images/products/stretcher-with-mattress.webp",
        description: "Mobile patient transport stretcher complete with comfortable padded mattress and side rails."
    },
    {
        id: 29,
        slug: "syringe-pump",
        name: "Syringe Pump",
        category: "Patient Care Equipment",
        image: "/images/products/syringe-pump.webp",
        description: "High-precision electronic infusion pump for controlled delivery of micro-fluids and medications."
    },
    {
        id: 30,
        slug: "waiting-chairs-2-3-4-seater",
        name: "Waiting Chair (2, 3 & 4 Seater)",
        category: "Patient Care Equipment",
        image: "/images/products/waiting-chair.webp", // [IMAGE REQUIRED]
        description: "Heavy-duty steel perforated waiting room chairs designed for hospital reception areas and waiting halls."
    },
    {
        id: 31,
        slug: "stretchers-ms-and-ss",
        name: "Stretchers (MS & SS)",
        category: "Patient Care Equipment",
        image: "/images/products/stretchers-ms-ss.webp", // [IMAGE REQUIRED]
        description: "Patient movement stretchers constructed in Mild Steel (MS) or Stainless Steel (SS) options."
    },
    {
        id: 32,
        slug: "examination-table",
        name: "Examination Table",
        category: "Patient Care Equipment",
        image: "/images/products/examination-table.webp", // [IMAGE REQUIRED]
        description: "Standard medical examination table equipped with a padded top and adjustable headrest section."
    },
    {
        id: 33,
        slug: "iv-stand",
        name: "I.V. Stand",
        category: "Patient Care Equipment",
        image: "/images/products/iv-stand.webp", // [IMAGE REQUIRED]
        description: "Height-adjustable intravenous fluid stand with heavy five-prong base and multiple suspension hooks."
    },
    {
        id: 34,
        slug: "food-trolley-overbed-table",
        name: "Food Trolley / Overbed Table",
        category: "Patient Care Equipment",
        image: "/images/products/overbed-table.webp", // [IMAGE REQUIRED]
        description: "Height-adjustable bed-side dining table allowing comfortable meals for bedbound patients."
    },
    {
        id: 35,
        slug: "instrument-trolley-ss",
        name: "Instrument Trolley (SS)",
        category: "Patient Care Equipment",
        image: "/images/products/instrument-trolley-ss.webp", // [IMAGE REQUIRED]
        description: "Stainless steel multi-shelf utility trolley for transporting medical instruments across wards."
    },
    {
        id: 36,
        slug: "dressing-trolley-ss",
        name: "Dressing Trolley (SS)",
        category: "Patient Care Equipment",
        image: "/images/products/dressing-trolley-ss.webp", // [IMAGE REQUIRED]
        description: "Stainless steel dressing cart equipped with bowl attachment, bucket holder, and smooth swivel casters."
    },
    {
        id: 37,
        slug: "footstep-ms-and-ss",
        name: "Footstep (MS & SS)",
        category: "Patient Care Equipment",
        image: "/images/products/footstep.webp", // [IMAGE REQUIRED]
        description: "Single and double step stool made of MS or SS with anti-slip rubber top for easy bed climbing."
    },
    {
        id: 38,
        slug: "instrument-cabinet",
        name: "Instrument Cabinet",
        category: "Patient Care Equipment",
        image: "/images/products/instrument-cabinet.webp", // [IMAGE REQUIRED]
        description: "Glass door surgical instrument storage cabinet for safe and dust-free keeping in operation rooms."
    },
    {
        id: 39,
        slug: "revolving-stool-ms-and-ss",
        name: "Revolving Stool (MS & SS)",
        category: "Patient Care Equipment",
        image: "/images/products/revolving-stool.webp", // [IMAGE REQUIRED]
        description: "Height-adjustable revolving stool with sturdy metallic base designed for doctors and OT technicians."
    },
    {
        id: 40,
        slug: "gyne-examination-table",
        name: "Gyne Examination Table / Delivery Table",
        category: "Patient Care Equipment",
        image: "/images/products/gyne-examination-table.webp", // [IMAGE REQUIRED]
        description: "Ergonomic gynecological examination and labor delivery table fitted with padded lithotomy crutches."
    },
    {
        id: 41,
        slug: "medicine-trolley",
        name: "Medicine Trolley",
        category: "Patient Care Equipment",
        image: "/images/products/medicine-trolley.webp", // [IMAGE REQUIRED]
        description: "Multi-drawer medicine dispensing trolley for safe organization and movement of patient medications."
    },
    {
        id: 42,
        slug: "bedside-screen-3-fold-and-4-fold",
        name: "Bedside Privacy Screen (3 Fold & 4 Fold)",
        category: "Patient Care Equipment",
        image: "/images/products/3-fold-screen.webp", // [IMAGE REQUIRED]
        description: "Foldable medical privacy screen with washable curtains and caster wheels for flexible partition in wards."
    },
    {
        id: 43,
        slug: "emergency-recovery-trolley",
        name: "Emergency Recovery Trolley",
        category: "Patient Care Equipment",
        image: "/images/products/emergency-recovery-trolley.webp", // [IMAGE REQUIRED]
        description: "Heavy-duty patient recovery stretcher trolley with height-adjustment mechanism, tilt facility, and side safety rails."
    },
    {
        id: 44,
        slug: "bedside-locker-single-deluxe-abs",
        name: "Bedside Locker (Single, Deluxe, ABS)",
        category: "Patient Care Equipment",
        image: "/images/products/bedside-locker.webp", // [IMAGE REQUIRED]
        description: "Patient room bedside cabinet constructed from durable metallic frame or corrosion-resistant ABS material."
    },
    {
        id: 45,
        slug: "icu-curtain",
        name: "ICU Curtain System",
        category: "Patient Care Equipment",
        image: "/images/products/icu-curtain.webp", // [IMAGE REQUIRED]
        description: "Antibacterial, fire-retardant hospital cubicle track curtains for ICU partitions and patient privacy."
    },
    {
        id: 46,
        slug: "ecg-trolley",
        name: "ECG Trolley",
        category: "Patient Care Equipment",
        image: "/images/products/ecg-trolley.webp", // [IMAGE REQUIRED]
        description: "Mobile utility trolley with dedicated shelves and cable hooks for holding ECG equipment during diagnostics."
    },
    {
        id: 47,
        slug: "bio-waste-trolley",
        name: "Bio-Waste Trolley",
        category: "Patient Care Equipment",
        image: "/images/products/bio-waste-trolley.webp", // [IMAGE REQUIRED]
        description: "Color-coded biomedical waste collection trolley with pedal-operated bin lids for hygienic waste management."
    }
];