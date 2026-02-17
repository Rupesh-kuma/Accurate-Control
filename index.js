// Product Data (same as before - keeping complete data structure)
const productData = {
    plc: {
        title: "SIEMENS PLC AUTOMATION SOLUTIONS",
        description: "We provide advanced Siemens PLC-based automation solutions for industrial process control, machine automation, and infrastructure projects. Our PLC portfolio includes the complete SIMATIC S7 family, offering scalable solutions from compact controllers to high-performance systems.",
        features: [
            "Compact to high-performance PLC options for any application scale",
            "Integrated PROFINET communication for seamless industrial networking",
            "Advanced motion control and positioning capabilities",
            "Extensive diagnostic features with web server functionality",
            "TIA Portal integration for unified engineering experience",
            "Robust design for harsh industrial environments (-25°C to +70°C)",
            "Modular expansion with signal modules and communication processors",
            "Fail-safe variants available for safety-critical applications"
        ],
        models: {
            's7-200': {
                name: "S7-200 Smart",
                description: "Compact micro PLC designed for small-scale automation tasks with basic to medium complexity. Features onboard I/O, Ethernet connectivity, and micro SD card support for program transfer and firmware updates.",
                image: "./images/S7-200-Smart.webp",
                badge: "MICRO PLC",
                specs: [
                    "CPU: SR20, SR30, SR40, SR60, ST20, ST30, ST40, ST60",
                    "Onboard I/O: Up to 60 points (36 DI + 24 DO)",
                    "Program Memory: 24 KB to 40 KB",
                    "Ethernet: 1 port with web server",
                    "RS485: Integrated serial communication",
                    "High-speed counters: Up to 6 (200 kHz)",
                    "Pulse outputs: Up to 3 (100 kHz)",
                    "Micro SD card slot for backup and transfer"
                ]
            },
            's7-1200': {
                name: "S7-1200",
                description: "Modular PLC with PROFINET integration, ideal for discrete and continuous control in manufacturing, food & beverage, and process industries.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
                badge: "MODULAR PLC",
                specs: [
                    "CPU: 1211C, 1212C, 1214C, 1215C, 1217C",
                    "Program Memory: 50 KB to 150 KB work memory",
                    "PROFINET: Integrated 2-port switch",
                    "Motion Control: Up to 8 axes positioning",
                    "Signal Modules: Up to 8 modules expandable",
                    "Communication: PROFIBUS, USS, Modbus RTU/TCP",
                    "Web Server: Built-in for remote diagnostics"
                ]
            },
            's7-1500': {
                name: "S7-1500",
                description: "High-performance PLC for demanding automation tasks requiring fast processing, extensive I/O, and advanced motion control.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
                badge: "HIGH PERFORMANCE",
                specs: [
                    "CPU: 1511, 1513, 1515, 1516, 1517, 1518",
                    "Work Memory: 150 KB to 2 MB",
                    "Processing Speed: Up to 1 ns per instruction",
                    "PROFINET: Integrated 2-port Gigabit switch",
                    "Motion Control: Advanced positioning",
                    "Redundancy: H-CPU variants available"
                ]
            },
            'et200sp': {
                name: "ET200SP",
                description: "Highly flexible distributed I/O system with IP20 protection for cabinet installation.",
                image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop",
                badge: "DISTRIBUTED I/O",
                specs: [
                    "Interface Module: IM 155-6 PN/DP",
                    "Module Width: 20mm ultra-compact",
                    "Max Modules: Up to 64 per station",
                    "Hot Swapping: Module replacement during operation",
                    "Motor Starters: Integrated up to 5.5 kW"
                ]
            }
        }
    },
    hmi: {
        title: "SIEMENS HMI SOLUTIONS",
        description: "Our comprehensive HMI portfolio provides intuitive operator interfaces for machine and plant visualization. From basic touchscreens to advanced industrial PCs.",
        features: [
            "Wide range of display sizes from 4\" to 22\" touchscreens",
            "Multi-touch gesture support for intuitive operation",
            "Unified engineering with TIA Portal",
            "Web server functionality for remote monitoring",
            "VNC server for remote desktop access",
            "Alarm management with SMS/email notification",
            "Recipe management for product changeovers"
        ],
        models: {
            'ktp-basic': {
                name: "KTP BASIC Panels",
                description: "Entry-level touchscreen panels for cost-effective visualization.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
                badge: "BASIC LINE",
                specs: [
                    "Display: 4\", 7\", 9\", 12\" TFT touchscreen",
                    "Resolution: WVGA to XGA",
                    "Function Keys: 6 to 8 configurable",
                    "Connectivity: PROFINET, MPI/PROFIBUS"
                ]
            },
            'ktp-comfort': {
                name: "KTP COMFORT Panels",
                description: "Advanced widescreen touchscreens with high-resolution displays.",
                image: "./images/S7-200-Smart.webp",
                badge: "COMFORT LINE",
                specs: [
                    "Display: Up to 22\" widescreen",
                    "Resolution: Up to Full HD (1920×1080)",
                    "Multi-touch: Gesture support",
                    "USB: 2× USB 2.0 ports"
                ]
            },
            'mtp-unified': {
                name: "MTP Unified Comfort Panels",
                description: "Multi-touch panels with unified engineering.",
                image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop",
                badge: "UNIFIED COMFORT",
                specs: [
                    "Touch Technology: Capacitive multi-touch",
                    "Processor: ARM Cortex-A9",
                    "Connectivity: Dual Ethernet, WiFi optional",
                    "Video: HDMI input for camera integration"
                ]
            },
            'unified-basic': {
                name: "Unified Basic Panels",
                description: "Cost-optimized panels with unified engineering.",
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop",
                badge: "UNIFIED BASIC",
                specs: [
                    "Display: 7\", 9\", 12\" touchscreen",
                    "Memory: 512 MB RAM, 4 GB Flash",
                    "Engineering: TIA Portal platform"
                ]
            },
            'key-panels': {
                name: "Key Panels",
                description: "Compact operator panels with physical keys.",
                image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=400&h=300&fit=crop",
                badge: "KEY OPERATION",
                specs: [
                    "Display: 2-line to 4-line LCD",
                    "Keys: 6 to 20 function keys",
                    "Protection: IP65 front panel"
                ]
            },
            'ipc': {
                name: "Industrial PC (IPC)",
                description: "Rugged industrial computers for advanced SCADA.",
                image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop",
                badge: "INDUSTRIAL PC",
                specs: [
                    "Processor: Intel Core i3/i5/i7",
                    "Memory: Up to 32 GB DDR4 RAM",
                    "Storage: SSD 128 GB to 1 TB",
                    "OS: Windows 10 IoT Enterprise"
                ]
            }
        }
    },
    drive: {
        title: "SIEMENS AC DRIVES SOLUTIONS",
        description: "Our comprehensive AC drive portfolio offers variable frequency drives for precise motor control in industrial applications.",
        features: [
            "Energy savings up to 60% through optimized control",
            "Precise speed and torque control",
            "Built-in safety functions (STO)",
            "PROFINET, PROFIBUS, Modbus communication",
            "Easy commissioning with BOP-2 panel"
        ],
        models: {
            'v20': {
                name: "SINAMICS V20",
                description: "Basic general-purpose inverter for simple speed control.",
                image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e23e?w=400&h=300&fit=crop",
                badge: "BASIC DRIVE",
                specs: [
                    "Power Range: 0.12 kW to 30 kW",
                    "Voltage: 1AC 200-240V, 3AC 380-480V",
                    "Control: V/f control",
                    "Overload: 150% for 60 seconds"
                ]
            },
            'g120': {
                name: "SINAMICS G120",
                description: "Modular drive platform with maximum flexibility.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
                badge: "MODULAR PLATFORM",
                specs: [
                    "Power Range: 0.37 kW to 250 kW",
                    "Control Units: CU230P-2, CU240E-2, CU250S-2",
                    "Communication: PROFINET, PROFIBUS"
                ]
            },
            'g120c': {
                name: "SINAMICS G120C",
                description: "Compact all-in-one frequency converter.",
                image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop",
                badge: "COMPACT DESIGN",
                specs: [
                    "Power Range: 0.55 kW to 18.5 kW",
                    "Integrated Filter: Class A EMC",
                    "Safety: STO as standard"
                ]
            },
            'g120xa': {
                name: "SINAMICS G120XA",
                description: "Infrastructure drive for HVAC and water/wastewater.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
                badge: "INFRASTRUCTURE",
                specs: [
                    "Power Range: 0.75 kW to 560 kW",
                    "Bypass: Intelligent bypass",
                    "Communication: BACnet, Modbus TCP"
                ]
            }
        }
    },
    servo: {
        title: "SIEMENS SERVO SYSTEMS",
        description: "High-precision servo drive systems for demanding motion control applications.",
        features: [
            "Ultra-precise positioning with 20-bit encoder",
            "Fast response time with 125 µs current loop",
            "Integrated safety technology",
            "Advanced motion control algorithms",
            "PROFINET, EtherCAT connectivity"
        ],
        models: {
            'v90': {
                name: "SINAMICS V90",
                description: "Basic servo drive for standard positioning.",
                image: "./images/S7-200-Smart.webp",
                badge: "BASIC SERVO",
                specs: [
                    "Power Range: 0.05 kW to 7 kW",
                    "Control Modes: Position, speed, torque",
                    "Encoder: 20-bit absolute encoder"
                ]
            },
            's200': {
                name: "SINAMICS S200 Servo",
                description: "High-performance servo for demanding applications.",
                image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop",
                badge: "HIGH PERFORMANCE",
                specs: [
                    "Power Range: 0.05 kW to 45 kW",
                    "Communication: PROFINET IRT, EtherCAT",
                    "Safety: STO, SS1, SS2 integrated"
                ]
            },
            's120': {
                name: "SINAMICS S120",
                description: "Modular multi-axis servo drive system.",
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop",
                badge: "MODULAR SYSTEM",
                specs: [
                    "Power Range: 0.12 kW to 5,700 kW per axis",
                    "Control Units: CU310-2, CU320-2",
                    "Synchronization: <1 µs jitter"
                ]
            }
        }
    },
    scada: {
        title: "SIEMENS SCADA SOLUTIONS",
        description: "Comprehensive SCADA software for industrial process monitoring and control.",
        features: [
            "Real-time process visualization",
            "Advanced alarm management",
            "Historical data trending",
            "Multi-language support",
            "Web-based client access",
            "OPC UA connectivity"
        ],
        models: {
            'wincc-advanced': {
                name: "WinCC Advanced",
                description: "Panel-based SCADA for machine visualization.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
                badge: "PANEL-BASED",
                specs: [
                    "Platform: SIMATIC HMI Panels",
                    "Tags: Up to 2,048 process tags",
                    "Engineering: TIA Portal"
                ]
            },
            'wincc-professional': {
                name: "WinCC Professional",
                description: "PC-based SCADA for plant-wide automation.",
                image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop",
                badge: "PC-BASED",
                specs: [
                    "Tags: Unlimited with licenses",
                    "Redundancy: Server redundancy",
                    "Database: SQL Server, Oracle"
                ]
            }
        }
    },
    software: {
        title: "SIEMENS PROGRAMMING SOFTWARE",
        description: "Complete suite of engineering tools for SIMATIC automation systems.",
        features: [
            "Unified engineering environment",
            "Multiple programming languages",
            "Integrated simulation (PLCSIM)",
            "Version control tools",
            "Comprehensive diagnostics",
            "Library management"
        ],
        models: {
            'step7-microwin': {
                name: "Step-7 Microwin Smart",
                description: "Programming software for S7-200 Smart PLCs.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
                badge: "S7-200 TOOL",
                specs: [
                    "Target PLCs: S7-200 Smart series",
                    "Languages: LAD, FBD, STL",
                    "Simulation: Integrated simulator"
                ]
            },
            'simatic-manager': {
                name: "SIMATIC Manager",
                description: "Classic programming for S7-300/400 PLCs.",
                image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=400&h=300&fit=crop",
                badge: "CLASSIC TOOL",
                specs: [
                    "Target PLCs: S7-300, S7-400",
                    "Version: V5.6 SP2",
                    "Languages: LAD, FBD, STL, Graph, SCL"
                ]
            },
            'tia-portal': {
                name: "TIA Portal",
                description: "Unified engineering framework for all SIMATIC devices.",
                image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop",
                badge: "UNIFIED PLATFORM",
                specs: [
                    "Devices: S7-1200, S7-1500, HMI, Drives",
                    "Languages: LAD, FBD, STL, SCL, Graph",
                    "Simulation: PLCSIM Advanced"
                ]
            },
            's7-basic': {
                name: "TIA Portal S7-Basic",
                description: "Entry-level version for S7-1200 PLCs.",
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop",
                badge: "BASIC VERSION",
                specs: [
                    "Target: S7-1200 CPUs, KTP Basic",
                    "Programming: LAD, FBD, SCL",
                    "Upgradeable to Professional"
                ]
            },
            's7-professional': {
                name: "TIA Portal S7-Professional",
                description: "Full-featured version supporting all devices.",
                image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop",
                badge: "PROFESSIONAL",
                specs: [
                    "All SIMATIC devices supported",
                    "Safety programming included",
                    "Motion control, redundancy"
                ]
            }
        }
    },
    smps: {
        title: "SIEMENS POWER SUPPLY SOLUTIONS (SITOP)",
        description: "Industrial power supply systems providing reliable 24V DC power for automation.",
        features: [
            "Wide input voltage range",
            "High efficiency >90%",
            "Comprehensive diagnostics",
            "Overload protection",
            "Global certifications",
            "Ambient temp: -25°C to +70°C"
        ],
        models: {
            'sitop': {
                name: "SITOP Power Supplies",
                description: "Comprehensive range from 3A to 40A output current.",
                image: "./images/S7-200-Smart.webp",
                badge: "INDUSTRIAL POWER",
                specs: [
                    "Models: PSU100C, PSU200M, PSU300M, PSU8200",
                    "Output: 24V DC ±1%",
                    "Parallel Operation: N+1 redundancy",
                    "Applications: PLC, HMI, sensors, actuators"
                ]
            }
        }
    },
    switch: {
        title: "SIEMENS ETHERNET SWITCHES",
        description: "Industrial Ethernet switches for reliable networking in harsh environments.",
        features: [
            "Industrial-grade design",
            "Fast redundancy <200ms",
            "PROFINET conformance",
            "Comprehensive security features",
            "QoS support",
            "Operating temp: -40°C to +70°C"
        ],
        models: {
            '5port': {
                name: "5 Port Ethernet Switch",
                description: "Compact unmanaged switch for small networks.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
                badge: "COMPACT",
                specs: [
                    "Model: SCALANCE X-005",
                    "Ports: 5× RJ45 10/100 Mbit/s",
                    "Installation: DIN rail mounting",
                    "Power: 24V DC"
                ]
            },
            '8port': {
                name: "8 Port Ethernet Switch",
                description: "Managed/unmanaged options for medium networks.",
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop",
                badge: "VERSATILE",
                specs: [
                    "Models: X-008, XC-008",
                    "Ports: 8× RJ45 with optional fiber",
                    "Managed Features: VLAN, QoS, IGMP",
                    "Redundancy: MRP support"
                ]
            },
            'managed': {
                name: "Managed Industrial Switches",
                description: "Advanced Layer 2/3 functionality.",
                image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop",
                badge: "ADVANCED",
                specs: [
                    "Models: SCALANCE XM-400, XC-200",
                    "Ports: 8 to 28 ports",
                    "Gigabit: 10/100/1000 with PoE+",
                    "Security: IEEE 802.1X, RADIUS, SSH"
                ]
            },
            'unmanaged': {
                name: "Unmanaged Industrial Switches",
                description: "Plug-and-play switches with zero configuration.",
                image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=400&h=300&fit=crop",
                badge: "PLUG & PLAY",
                specs: [
                    "Models: SCALANCE X-000 series",
                    "Auto-Negotiation: Speed/duplex",
                    "No Configuration: Zero-touch",
                    "Applications: Small cells, test benches"
                ]
            }
        }
    }
};

// Set Active Tab - Show all models in category
function setActiveTab(element, category) {

    document.querySelectorAll('.list-group-item').forEach(item => {
        item.classList.remove('active');
    });

    element.classList.add('active');

    // Close all submenus
    document.querySelectorAll('.submenu').forEach(menu => {
        menu.classList.remove('show');
    });

    // Open current submenu
    const target = element.getAttribute('data-bs-target');
    if (target) {
        document.querySelector(target).classList.add('show');
    }

    renderAllModels(category);
}


// Show Product Function - Show single model
function showProduct(category, productKey, element) {
    // Update submenu active state
    const submenu = element.closest('.submenu');
    submenu.querySelectorAll('.submenu-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');

    // Render single product
    renderSingleProduct(category, productKey);
}

// Render All Models in Category
function renderAllModels(category) {
    const data = productData[category];

    if (!data) {
        document.getElementById('contentArea').innerHTML = '<div class="alert alert-warning">Category not found</div>';
        return;
    }

    // Create cards for all models
    const modelsHTML = Object.entries(data.models).map(([key, model]) => `
                <div class="col-lg-6 col-md-6 mb-4">
                    <div class="model-card" onclick="showProductFromCard('${category}', '${key}')">
                        <div class="model-image model-imagess">
                            <img src="${model.image}" alt="${model.name}" 
                                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23e8ecf1%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%235a6376%22%3E${model.name}%3C/text%3E%3C/svg%3E'">
                        </div>
                        <div class="model-info">
                            <div class="model-name">${model.name}</div>
                            <div class="model-description">${model.description}</div>
                            <span class="model-badge">${model.badge}</span>
                        </div>
                    </div>
                </div>
            `).join('');

    const html = `
                <h2 class="product-title">${data.title}</h2>
                
                <div class="description-box">
                    <p>${data.description}</p>
                </div>
                
                <h4 class="mt-4 mb-3" style="font-family: 'Rajdhani', sans-serif; color: var(--siemens-dark); font-weight: 600;">
                    <i class="bi bi-grid-3x3-gap me-2"></i>Available Models
                </h4>
                
                <div class="row">
                    ${modelsHTML}
                </div>
                
                <div class="features-box">
                    <h3>Category Features & Advantages</h3>
                    <ul class="feature-list">
                        ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            `;

    document.getElementById('contentArea').innerHTML = html;
}

// Render Single Product
function renderSingleProduct(category, productKey) {
    const data = productData[category];
    const model = data.models[productKey];

    if (!model) {
        document.getElementById('contentArea').innerHTML = '<div class="alert alert-warning">Product not found</div>';
        return;
    }

    const html = `
                <h2 class="product-title">${data.title}</h2>
                
                <div class="description-box">
                    <p>${data.description}</p>
                </div>
                
                <div class="row">
                    <div class="col-md-12 mb-4">
                        <div class="model-card">
                            <div class="model-image">
                                <img src="${model.image}" alt="${model.name}" 
                                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23e8ecf1%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%235a6376%22%3E${model.name}%3C/text%3E%3C/svg%3E'">
                            </div>
                            <div class="model-info">
                                <div class="model-name">${model.name}</div>
                                <div class="model-description">${model.description}</div>
                                <span class="model-badge">${model.badge}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                ${model.specs ? `
                    <div class="features-box">
                        <h3><i class="bi bi-cpu me-2"></i>Technical Specifications</h3>
                        <ul class="feature-list">
                            ${model.specs.map(spec => `<li>${spec}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                <div class="features-box">
                    <h3><i class="bi bi-star me-2"></i>Key Features & Benefits</h3>
                    <ul class="feature-list">
                        ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="alert alert-info mt-4" role="alert">
                    <i class="bi bi-info-circle me-2"></i>
                    <strong>Need more information?</strong> Contact our technical team for detailed specifications, pricing, and customization options for ${model.name}.
                </div>
            `;

    document.getElementById('contentArea').innerHTML = html;
}

// Show product from card click
function showProductFromCard(category, productKey) {
    // Find and activate the submenu item
    const submenu = document.getElementById(`submenu-${category}`);
    if (submenu) {
        const items = submenu.querySelectorAll('.submenu-item');
        items.forEach(item => {
            const onclick = item.getAttribute('onclick');
            if (onclick && onclick.includes(`'${productKey}'`)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Render the product
    renderSingleProduct(category, productKey);
}

// Initialize - Show all PLC models on load
document.addEventListener('DOMContentLoaded', function () {
    renderAllModels('plc');
});

// side bar menu

function loadPart(id, file) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .then(initSidebar); // important
  }
  
  function initSidebar() {
  
    const menuToggle = document.getElementById("menuToggle");
    const sidePanel = document.getElementById("sidePanel");
    const menuClose = document.getElementById("menuClose");
    const menuOverlay = document.getElementById("menuOverlay");
  
    if (!menuToggle) return;
  
    menuToggle.onclick = () => {
      sidePanel.classList.add("active");
      menuOverlay.classList.add("active");
    };
  
    menuClose.onclick = () => {
      sidePanel.classList.remove("active");
      menuOverlay.classList.remove("active");
    };
  
    menuOverlay.onclick = () => {
      sidePanel.classList.remove("active");
      menuOverlay.classList.remove("active");
    };
  }
  
  loadPart("header", "./Header.html");
  loadPart("footer", "./footer.html");
  