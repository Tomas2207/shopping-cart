const items = [
  {
    name: 'Lenovo - 2022 - IdeaPad Flex 5',
    price: '1200.56',
    photo: '../img/lenovo.jpg',
    keys: 0,
    index: 0,
    quantity: 1,
    added: false,
    desc: [
      'With the latest AMD Ryzen 5 U series processors and 16GB DDR4 RAM, enjoy excellent performance',
      'Create, play, stream, and work in any position, surface or incline with a 360° hinge that lets you watch shows, present and share in tent and stand modes and browse while in tablet mode',
      'Expand your field of view with a taller 16:10 aspect ratio on the 14" WUXGA touchscreen and four-sided thin bezels',
      'Store more data faster with 512GB SSD storage and keep your PC cool and quiet even under heavy loads with Intelligent Cooling',
      'Awaken your senses to refreshing speed, with the confidence to unplug and go further, then recharge quickly with Rapid Charge Boost',
    ],
  },
  {
    name: 'Apple iPhone 13',
    price: '959.99',
    photo: '../img/phone.jpg',
    keys: 1,
    index: 1,
    quantity: 1,
    added: false,
    desc: [
      '6.1" Super Retina XDR display. 5G Superfast downloads, high?quality streaming',
      'Cinematic mode in 1080p at 30 fps. Dolby Vision HDR video recording up to 4K at 60 fps. 2X Optical zoom range',
      'A15 Bionic chip. New 6-core CPU with 2 performance and 4 efficiency cores. New 4-core GPU. New 16-core Neural Engine',
      'Up to 19 hours video playback. Face ID. Ceramic Shield front. Aerospace-grade aluminum',
      'Water resistant to a depth of 6 meters for up to 30 minutes. Compatible with MagSafe accessories and wireless chargers',
    ],
  },
  {
    name: 'TCL 75-inch 6-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV',
    price: '2299.00',
    photo: '../img/tv1.jpg',
    keys: 2,
    index: 2,
    quantity: 1,
    added: false,
    desc: [
      'Superior 4K Ultra HD: Picture clarity combined with the contrast, color, and detail of Dolby Vision HDR (High Dynamic Range) for the most lifelike picture',
      'Mini-LED Technology: Uncompromised contrast, brightness, and uniformity for incredible viewing in any environment',
      'Product Size (WxHxD) with Stand: 65.8" x 41.4" x 15.9"; Product Size (WxHxD) without stand: 65.8" x 37.9" x 3.6"',
      'QLED: Quantum dot technology delivers better brightness and wider color volume',
      'Contrast Control Zones: Contrast is individually optimized across up to 240 localized zones for striking contrast between bright and dark areas of the image',
    ],
  },
  {
    name: 'Playstation 5 Console',
    price: '499.99',
    photo: '../img/ps5.jpg',
    keys: 3,
    index: 3,
    quantity: 1,
    added: false,
    desc: [
      'Stunning Games - Marvel at incredible graphics and experience new PS5 features.',
      'Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.',
      'Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.',
      'Model Number CFI-1102A',
    ],
  },
  {
    name: 'LG 27GP950-B 27” Ultragear UHD (3840 x 2160) Nano IPS Gaming Monitor 144Hz',
    price: '799.00',
    photo: '../img/monitor.jpg',
    keys: 4,
    index: 4,
    quantity: 1,
    added: false,
    desc: [
      '27” UHD (3840 x 2160) Nano IPS Display ',
      'Brightness (typ.) is 350 cd/m2',
      'IPS 1ms (GtG) 144Hz with VESA DSC Technology (O.C 160Hz)',
      'UHD 4K & VRR up to 120Hz with HDMI 2.1',
      'NVIDIA G-SYNC Compatible with AMD FreeSync Premium Pro',
      'DCI-P3 98% with VESA DisplayHDR 600',
      '4-Side Virtually Borderless Display',
    ],
  },
  {
    name: 'Ibanez Artcore Series AF75G Hollowbody Electric Guitar Flat Black',
    price: '659.89',
    photo: '../img/guitar.jpg',
    keys: 5,
    index: 5,
    quantity: 1,
    added: false,
    desc: [
      'Full-hollow body Maple top, sides, and back Mahogany set neck Bound rosewood fretboard Classic Elite pickups Gold hardware Case sold separately',
      'As evidenced by its long-standing association with such giants of jazz guitar as George Benson, Pat Metheny, and John Scofield, Ibanez has been a constant pioneer in the world of hollow-body guitar building for more than three decades',
      'Part of that legacy is owed to the Artcore collection, which has succeeded in smashing any and all preconceptions in its wake as to what a great hollow or semi-hollow ought to be',
      'The Artcore formula builds on equal parts luthiery know-how, daring design, and a passion for warm, full-bodied tone',
      'The AF75G features a select-grade Maple hollow body, a set-in Mahogany neck and Rosewood fretboard contribute to the warm-sounding characteristics of the AF75G',
    ],
  },
  {
    name: 'DXRacer PC Gaming Chair Racing Style Office Computer Seat',
    price: '329.00',
    photo: '../img/gaming-chair.jpg',
    keys: 6,
    index: 6,
    quantity: 1,
    added: false,
    desc: [
      'NO1. Gaming Chair Brand | Born in 2001, DXRacer is the first and original brand of the modern gaming chair. As the leading premium brand of gaming chairs, DXRacer is world-renowned and available on all continents with its headquarters in Michigan, USA. With over 19 years’ expertise in innovation and design, DXRacer has already become the top seat of choice for pros, enthusiasts, large esports events, and tournaments.',
      " Your Entry-level Racing Chair | The Formula Series is our first series and the world's most sold gaming chair due to its affordable entry-level price for the premium seating experience it offers. Hailing directly from the world of racing to the world of gaming, Formula is for slim users and is the most popular gaming chair for esports. It holds weights up to 200lbs and height up to 5'8",
      'Top Gaming Seat For Gamers | To deliver gamers the highest levels of quality and comfort, our products are manufactured with high-quality materials for the covering, higher-density mold shaping foam as well as full-metal frames for maximum stability and sturdiness. All the other components such as class 4 gas lifts are certificated by TÜV LGA, ANSI/BIFMA (by SGS), and ISO9001 for extra safety and durability.',
    ],
  },
  {
    name: 'Xbox One Controller',
    price: '60.99',
    photo: '../img/controller.jpg',
    keys: 7,
    index: 7,
    quantity: 1,
    added: false,
    desc: [
      'Experience the modernized design of the Xbox Wireless Controller in Carbon Black, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay with battery usage up to 40 hours.',

      'Stay on target with the hybrid D-pad, textured grip on the triggers, bumpers, and back-case. Plug in any compatible headset with the 3.5mm audio headset jack.',

      'Connect using the USB-C port for direct plug and play to console or PC. Support for AA batteries is included on the rear.',
      'Seamlessly capture and share content with the Share button.',
    ],
  },
  {
    name: 'HyperX Cloud II - Gaming Headset, 7.1',
    price: '110.66',
    photo: '../img/headset.jpg',
    keys: 8,
    index: 8,
    quantity: 1,
    added: false,
    desc: [
      '15-25kKhz Frequency Response.Headphones fit type:Over-Ear',
      'Designed for comfort: Exceptionally comfortable memory foam ear cushions and padded leatherette headband help keep you focused on gaming',
      'Supreme audio quality: Large 53 millimeter drivers provide high-quality audio. Hear in-game details better and get the in-game advantage on your opponents',
      '7.1 virtual surround sound: Truly immerse yourself in your games with hardware-driven virtual 7.1 surround sound for precisely located audio',
      'Passive noise cancellation: The closed ear cup design blocks out outside distractions to keep you in the game',
      'Built to last: The solid, durable aluminum frame is built to withstand the blows of daily use',
      'Detachable, noise-cancelling microphone: TeamSpeak and Discord certified so you can chat with your friends and your callouts will be heard loud and clear',
      'Compatibility: 7.1 virtual surround sound on PC & Mac. Stereo on PS4, Xbox One, Nintendo Switch, and mobile devices',
    ],
  },
  {
    name: 'Thermaltake Glacier 360 Liquid-Cooled PC ',
    price: '1499.99',
    photo: '../img/pc.jpg',
    keys: 9,
    index: 9,
    quantity: 1,
    added: false,
    desc: [
      'AMD Ryzen 5 5600X CPU Watercooled, AMD B550 Chipset ATX motherboard, 16GB ToughRam DDR4 RGB, 1TB NVMe M.2, WiFi, Windows 10 Home',
      'NVIDIA GeForce RTX 3060. Graphics card brand may vary',
      'Closed Loop Liquid Cooling with 240mm Radiator and 3 ARGB Fan',
      '1x USB 3.0, 2x USB 2.0, 1x Headphone, 1x Mic Ports',
      'Swing door tempered glass with magnetic mounting. ',
    ],
  },
];

export default items;
