/*
 * KALYAN DENTAL CLINIC - CONFIGURATION FILE
 * Quick reference for customization
 */

// ============================================
// CONTACT INFORMATION
// ============================================
const CLINIC_CONFIG = {
    // Clinic Information
    clinic_name: "Kalyan Dental Clinic – Dr. Sabina",
    doctor_name: "Dr. Sabina",
    years_experience: 22,
    
    // Contact Details
    phone: "072080 17597",
    whatsapp: "917208017597",
    email: "contact@kalyandentalclinic.com", // Add your email
    
    // Address
    address: {
        line1: "Deshmukh Bhavan, Next To Pai General Stores",
        line2: "Kalyan-Murbad Road Syndicate",
        city: "Kalyan West",
        state: "Maharashtra",
        country: "India",
        postal_code: "421301"
    },
    
    // Clinic Timings
    timings: {
        weekday: "Monday to Saturday",
        morning: {
            start: "10:00 AM",
            end: "2:00 PM"
        },
        evening: {
            start: "6:00 PM",
            end: "11:30 PM"
        },
        emergency_support: "24/7"
    },
    
    // Statistics
    stats: {
        experience_years: 22,
        happy_patients: 5000,
        treatments_completed: 10000,
        support_hours: 24
    },
    
    // Social Media
    social_media: {
        facebook: "https://facebook.com/kalyandentalclinic",
        instagram: "https://instagram.com/kalyandentalclinic",
        twitter: "https://twitter.com/kalyandentalclinic",
        linkedin: "https://linkedin.com/company/kalyan-dental-clinic"
    },
    
    // Website URLs (for deployment)
    website_url: "https://kalyandentalclinic.com",
    google_map_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.819823856837!2d73.13024!3d19.2403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e7e7e7e7e7%3A0x0!2sKalyan%20Dental%20Clinic%20-%20Dr%20Sabina!5e0!3m2!1sen!2sin!4v1234567890",
    
    // SEO
    seo: {
        title: "Kalyan Dental Clinic – Dr. Sabina | Premium Dental Care",
        description: "Advanced dental care in Kalyan. 22+ years of trusted dental excellence with Dr. Sabina. Cosmetic dentistry, implants, root canals, and more.",
        keywords: "dental clinic, cosmetic dentistry, dental implants, root canal, teeth whitening, smile design, Kalyan dentist, Dr Sabina",
        author: "Kalyan Dental Clinic",
        language: "en"
    },
    
    // Color Theme
    colors: {
        primary: "#06b6d4",      // Cyan
        secondary: "#3b82f6",    // Blue
        tertiary: "#14b8a6",     // Teal
        accent: "#0ea5e9",       // Sky Blue
        dark_bg: "#0f172a",      // Dark Navy
        light_text: "#e2e8f0",   // Light Gray
        dark_text: "#0f172a"     // Dark Text
    }
};

// ============================================
// ANIMATION SETTINGS
// ============================================
const ANIMATION_CONFIG = {
    // Smooth Scrolling
    lenis: {
        duration: 1.2,
        easing: "smooth"
    },
    
    // GSAP Animation Defaults
    gsap: {
        default_duration: 0.8,
        default_ease: "power2.out",
        scroll_trigger_scrub: 0.5
    },
    
    // Counter Animation
    counter: {
        duration: 30, // frames
        easing: "easeOutCubic"
    },
    
    // Parallax Effect
    parallax: {
        speed: 50
    }
};

// ============================================
// SERVICES LIST
// ============================================
const SERVICES = [
    {
        name: "Teeth Whitening",
        description: "Professional whitening for a brighter, more radiant smile."
    },
    {
        name: "Dental Implants",
        description: "Advanced implant solutions for permanent tooth replacement."
    },
    {
        name: "Root Canal Treatment",
        description: "Painless root canal therapy to save your natural teeth."
    },
    {
        name: "Cosmetic Dentistry",
        description: "Transform your smile with cutting-edge cosmetic treatments."
    },
    {
        name: "Dentures & Bridges",
        description: "Custom dentures and bridges for complete tooth replacement."
    },
    {
        name: "Teeth Cleaning",
        description: "Professional cleaning and scaling for optimal oral hygiene."
    },
    {
        name: "Veneers & Crowns",
        description: "Aesthetic dental restorations for a perfect smile."
    },
    {
        name: "Laser Dentistry",
        description: "Advanced laser treatments for precise and gentle care."
    },
    {
        name: "Oral Surgery",
        description: "Expert surgical procedures with advanced techniques."
    },
    {
        name: "Pediatric Dentistry",
        description: "Specialized dental care for children in a fun environment."
    },
    {
        name: "Smile Design",
        description: "Personalized smile makeovers tailored to your features."
    },
    {
        name: "Emergency Dental Care",
        description: "24/7 emergency dental services for urgent situations."
    },
    {
        name: "Extractions",
        description: "Painless tooth extraction with expert precision."
    },
    {
        name: "Fillings & Sealants",
        description: "Protective treatments to prevent tooth decay."
    },
    {
        name: "Digital X-Rays",
        description: "Advanced diagnostic imaging with minimal radiation."
    },
    {
        name: "Teeth Reshaping",
        description: "Aesthetic tooth contouring for a harmonious smile."
    },
    {
        name: "Mouth Guards",
        description: "Custom-fitted protective guards for sports and sleep."
    }
];

// ============================================
// DOCTOR SPECIALIZATIONS
// ============================================
const SPECIALIZATIONS = [
    "Cosmetic Dentistry",
    "Root Canals",
    "Dental Implants",
    "Smile Designing",
    "Child Dentistry",
    "Family Dental Care"
];

// ============================================
// CERTIFICATIONS
// ============================================
const CERTIFICATIONS = [
    {
        title: "BDS Degree",
        issuer: "Govt Dental Hospital & College, Mumbai",
        year: "Completed"
    },
    {
        title: "Cosmetic Specialist",
        issuer: "Advanced Aesthetic Dentistry Certification",
        year: "2023"
    },
    {
        title: "Implant Expert",
        issuer: "International Implantology Certification",
        year: "2022"
    },
    {
        title: "Laser Specialist",
        issuer: "Advanced Laser Dentistry Training",
        year: "2021"
    }
];

// ============================================
// TECHNOLOGY & EQUIPMENT
// ============================================
const TECHNOLOGY = [
    {
        name: "Digital Imaging",
        description: "Latest 3D scanning technology",
        category: "Diagnostics"
    },
    {
        name: "Laser Technology",
        description: "Advanced surgical laser systems",
        category: "Treatment"
    },
    {
        name: "Intraoral Camera",
        description: "High-resolution visualization",
        category: "Diagnostics"
    },
    {
        name: "Digital Smile Design",
        description: "AI-powered smile preview",
        category: "Planning"
    }
];

// ============================================
// FAQ SECTION (optional addition)
// ============================================
const FAQ = [
    {
        question: "What should I do in case of a dental emergency?",
        answer: "Call us immediately at 072080 17597. We provide 24/7 emergency support."
    },
    {
        question: "How often should I visit the dentist?",
        answer: "We recommend dental checkups every 6 months for optimal oral health."
    },
    {
        question: "What is the cost of dental implants?",
        answer: "Please contact us for pricing details. We offer flexible payment plans."
    },
    {
        question: "Do you offer orthodontic treatments?",
        answer: "We specialize in various dental treatments. Contact us to discuss your needs."
    },
    {
        question: "How can I book an appointment?",
        answer: "Click 'Book Appointment' or call 072080 17597. You can also WhatsApp us."
    }
];

// ============================================
// EXPORT FOR USE
// ============================================

// In HTML or JavaScript:
// <script>
//   console.log(CLINIC_CONFIG.clinic_name);
//   console.log(CLINIC_CONFIG.phone);
//   console.log(SERVICES);
// </script>

// ============================================
// HOW TO UPDATE INFORMATION
// ============================================

/*

1. UPDATE PHONE NUMBER:
   - Change CLINIC_CONFIG.phone value
   - Update in index.html: <a href="tel:">

2. UPDATE ADDRESS:
   - Change CLINIC_CONFIG.address values
   - Update in index.html contact section

3. UPDATE TIMINGS:
   - Modify CLINIC_CONFIG.timings values
   - Update in index.html timing section

4. ADD NEW SERVICE:
   - Add object to SERVICES array
   - Create new service card in HTML

5. UPDATE COLORS:
   - Modify CLINIC_CONFIG.colors
   - Update css/styles.css :root variables

6. UPDATE DOCTOR INFORMATION:
   - Edit SPECIALIZATIONS array
   - Update doctor section in HTML

7. CHANGE STATISTICS:
   - Modify CLINIC_CONFIG.stats
   - Update counter values in HTML

*/

// ============================================
// CUSTOMIZATION EXAMPLES
// ============================================

// Example: How to dynamically update clinic name
// document.querySelector('.clinic-name').textContent = CLINIC_CONFIG.clinic_name;

// Example: How to populate services dynamically
// SERVICES.forEach(service => {
//     const card = document.createElement('div');
//     card.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
//     document.querySelector('#services').appendChild(card);
// });

// Example: How to set up social media links
// document.querySelector('.facebook-link').href = CLINIC_CONFIG.social_media.facebook;

// ============================================
// VALIDATION HELPER
// ============================================

function validatePhoneNumber(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone.replace(/\D/g, ''));
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Usage:
// console.log(validatePhoneNumber("9876543210")); // true
// console.log(validateEmail("test@example.com")); // true
