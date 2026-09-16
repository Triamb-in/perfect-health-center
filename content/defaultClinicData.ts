import { ClinicData } from "@/types";

export const defaultClinicData: ClinicData = {
  clinicName: "Perfect Health Center",
  doctorName: "Dr. Pragati Khobragade",
  // Confirm exact qualification degree with client before final production launch.
  doctorTitle: "Skin Care & Asthma Specialist | Homeopathy & General Practice",
  doctorExperienceYears: "20+",
  tagline: "Compassionate Care, Naturally",
  quote: "Healing the body, mind and soul with care you can trust.",
  doctorBio:
    "Dr. Pragati Khobragade has over 20 years of clinical experience in classical homeopathy and primary general healthcare. Dedicated to gentle, root-cause healing, she combines comprehensive constitutional case taking with holistic medical oversight to treat acute ailments and long-standing chronic conditions safely.",

  address: {
    clinicName: "Perfect Health Center",
    street: "Mumra Devi Colony, Diva East",
    locality: "Diva East, Thane",
    city: "Thane",
    district: "Thane",
    state: "Maharashtra",
    pincode: "400612",
    country: "IN",
    fullFormatted: "Perfect Health Center, Mumra Devi Colony, Diva East, Thane – 400612, Maharashtra",
    regionContext: "Diva East, Thane (Mumbai Metropolitan Region)",
  },

  contact: {
    phone: "+919273431261",
    phoneFormatted: "+91 92734 31261",
    email: "pragativuplekar[at]gmail.com",
    whatsappUrl: "https://wa.me/919273431261?text=Hello%20Dr.%20Pragati,%20I%20would%20like%20to%20inquire%20about%20a%20consultation%20at%20Perfect%20Health%20Center.",
    youtubeChannelUrl: "https://www.youtube.com/@pragatiuplekar4292/videos",
    youtubeChannelName: "pragatiuplekar4292",
    secondaryPhone: "+918087775415",
    secondaryPhoneFormatted: "+91 80877 75415",
    secondaryEmail: "Uplekarvijay78[at]gmail.com",
    secondaryWhatsappUrl: "https://wa.me/918087775415?text=Hello%20Dr.%20Vijay,%20I%20would%20like%20to%20inquire%20about%20a%20consultation%20at%20Perfect%20Health%20Center.",
    secondaryContactName: "Dr. Vijay Uplekar",
  },

  developerCredit: {
    text: "A digital experience by",
    brand: "TRIAMB",
    handle: "@triamb.in",
    url: "https://www.instagram.com/triamb.in/",
  },

  hours: [
    {
      days: "Monday – Saturday",
      time: "10:30 AM – 10:00 PM",
      isClosed: false,
    },
    {
      days: "Sunday",
      time: "Closed",
      isClosed: true,
    },
  ],

  paymentModes: [
    "UPI / GPay / PhonePe",
    "Debit & Credit Cards",
    "Net Banking",
    "Cash",
  ],

  specialties: [
    {
      id: "skin-care",
      title: "Skin Care",
      shortDesc: "Holistic homeopathic dermatology & facial aesthetic care for clear, healthy, glowing skin.",
      fullDesc:
        "Root-cause homeopathic treatment for stubborn acne, facial pigmentation, melasma, atopic dermatitis, and allergic skin rashes. Dr. Pragati combines clinical dermatology insights with gentle constitutional remedies that balance internal vitality without harsh steroid creams.",
      iconName: "Sparkles",
      conditions: [
        "Acne, Pimples & Blemishes",
        "Melasma & Hyperpigmentation",
        "Atopic Dermatitis & Eczema",
        "Facial Aesthetic Rejuvenation",
        "Urticaria & Allergic Rashes",
      ],
      benefits: [
        "Steroid-free holistic healing from within",
        "Zero harsh topical peeling or chemical suppression",
        "Prevents recurring flare-ups by addressing metabolic roots",
      ],
    },
    {
      id: "asthma",
      title: "Asthma",
      shortDesc: "Specialized respiratory care by Dr. Pragati for bronchial asthma, allergic bronchitis & wheezing.",
      fullDesc:
        "As a core specialty of Dr. Pragati Khobragade, our respiratory clinic treats bronchial asthma, wheezing, nighttime coughing fits, and chest tightness. Constitutional remedies reduce bronchial hypersensitivity, improve lung capacity, and reduce reliance on emergency inhalers.",
      iconName: "Wind",
      conditions: [
        "Bronchial Asthma & Wheezing",
        "Allergic Bronchitis & Chronic Cough",
        "Childhood Wheeze & Nighttime Breathlessness",
        "Seasonal & Dust-Triggered Asthma",
        "Chest Tightness & Exercise-Induced Dyspnea",
      ],
      benefits: [
        "Gradually reduces dependency on rescue inhalers",
        "Strengthens bronchial mucosa against environmental triggers",
        "Safe and gentle for pediatric and elderly patients alike",
      ],
    },
    {
      id: "hair-fall",
      title: "Hair Fall",
      shortDesc: "Root-strengthening therapies for excessive shedding, thinning, alopecia areata & dandruff.",
      fullDesc:
        "Hair loss is often a reflection of underlying nutritional deficiencies, hormonal shifts, stress, or autoimmune tendencies. Our constitutional remedies stimulate follicle circulation, arrest rapid hair shedding, treat stubborn scalp dandruff, and encourage natural re-growth.",
      iconName: "Sparkles",
      conditions: [
        "Excessive Hair Fall & Diffuse Thinning",
        "Alopecia Areata (Coin-Sized Bald Patches)",
        "Chronic Scalp Dandruff & Seborrhea",
        "Postpartum & Hormonal Hair Loss",
        "Stress-Induced Telogen Effluvium",
      ],
      benefits: [
        "Revitalizes dormant hair follicles from the root",
        "Controls oily, itchy scalp and persistent flaking",
        "Improves natural hair density, texture, and strength",
      ],
    },
    {
      id: "migraine",
      title: "Migraine",
      shortDesc: "Targeted constitutional relief to reduce the frequency, duration, and intensity of migraines.",
      fullDesc:
        "Comprehensive homeopathic management for unilateral throbbing migraines, visual aura, stress-induced tension headaches, and hormonally triggered headaches. Our treatment regulates neurological and vascular hypersensitivity without sedative dependency.",
      iconName: "Brain",
      conditions: [
        "Chronic Throbbing Migraine with Aura",
        "Stress & Tension Headaches",
        "Hormonal & Menstrual Headaches",
        "Cervical & Gastric Migraines",
        "Nausea & Sensory Sensitivity with Headaches",
      ],
      benefits: [
        "Significantly decreases attack frequency and intensity",
        "Free from sedative and painkiller dependency",
        "Addresses emotional, digestive, and hormonal triggers",
      ],
    },
    {
      id: "fungal-infections",
      title: "Fungal Infections / Ringworm",
      shortDesc: "Constitutional care to soothe stubborn ringworm, strengthen skin resistance, and manage persistent fungal rashes.",
      fullDesc:
        "Topical applications often provide temporary relief while fungal spores persist on sensitive skin. Our internal homeopathic approach focuses on strengthening cellular resistance, managing stubborn ringworm (tinea corporis/cruris), athlete's foot, and chronic fungal itch without steroid rebound.",
      iconName: "ShieldCheck",
      conditions: [
        "Ringworm (Tinea Corporis & Cruris)",
        "Stubborn Fungal Skin Itching & Patches",
        "Athlete's Foot & Toe Fungal Infections",
        "Candidiasis & Intertrigo in Skin Folds",
        "Recurring Sweat-Induced Fungal Rashes",
      ],
      benefits: [
        "Soothes persistent burning and itching sensations",
        "Supports skin health without over-reliance on suppressive topical ointments",
        "Aids in restoring local skin resistance to minimize recurrence",
      ],
    },
    {
      id: "psoriasis",
      title: "Psoriasis",
      shortDesc: "Gentle autoimmune modulation for chronic plaque psoriasis, scalp scaling, and inflammation.",
      fullDesc:
        "Psoriasis is an autoimmune condition where skin cells multiply rapidly. Dr. Pragati’s individualized homeopathic treatment works at the immune and constitutional level to slow down cell turnover, clear scaly silvery plaques, and relieve itching naturally.",
      iconName: "Layers",
      conditions: [
        "Plaque Psoriasis on Elbows & Knees",
        "Scalp Psoriasis with Severe Flaking",
        "Guttate & Inverse Psoriasis",
        "Dry, Cracked, Bleeding Skin Patches",
        "Psoriatic Itching & Burning Discomfort",
      ],
      benefits: [
        "Normalizes hyperactive immune responses safely",
        "Soothes severe dryness, cracking, and scaling",
        "Aids in achieving long-lasting clinical remission",
      ],
    },
    {
      id: "piles",
      title: "Piles",
      shortDesc: "Conservative homeopathic care to relieve swollen hemorrhoids and bleeding distress naturally.",
      fullDesc:
        "Gentle, non-invasive therapeutic options for internal and external hemorrhoids (piles). Our constitutional remedies help relieve pelvic venous congestion, soothe swollen hemorrhoidal tissues, regulate chronic constipation, and manage rectal discomfort.",
      iconName: "HeartPulse",
      conditions: [
        "Bleeding & Non-Bleeding Piles",
        "Internal & External Hemorrhoids",
        "Throbbing Rectal Pain & Discomfort",
        "Prolapsed Swollen Pile Masses",
        "Straining & Chronic Constipation Distress",
      ],
      benefits: [
        "Gentle, non-surgical supportive approach",
        "Helps manage rectal discomfort, bleeding, and swelling",
        "Supports natural digestion, liver function, and bowel regularity",
      ],
    },
    {
      id: "renal-stones",
      title: "Renal Stones",
      shortDesc: "Supportive protocols to relieve renal colic, assist stone expulsion, and help manage recurring kidney stones.",
      fullDesc:
        "Specialized homeopathic protocols designed to relieve urinary tract spasms, support the natural passage of small renal and ureteric calculi (kidney stones), and address underlying metabolic diathesis to reduce recurrence risk.",
      iconName: "Droplets",
      conditions: [
        "Kidney Calculi (Nephrolithiasis)",
        "Ureteric Stones & Urinary Obstruction",
        "Acute Flank & Renal Colic Spasms",
        "Burning & Pain During Urination (Dysuria)",
        "Frequent Recurrent Kidney Stone Formation",
      ],
      benefits: [
        "Supports natural passage of small calculi with minimal discomfort",
        "Helps alleviate spasmodic flank and groin pain",
        "Addresses constitutional tendencies toward crystal formation",
      ],
    },
    {
      id: "fissure",
      title: "Fissure",
      shortDesc: "Soothing remedies for anal fissures, sphincter tightness, and post-bowel discomfort.",
      fullDesc:
        "Anal fissures cause sharp tearing pain and bleeding during and after bowel movements. Our soothing homeopathic remedies aim to relax involuntary sphincter tension, ease bowel movements, and support mucosal tissue comfort gently.",
      iconName: "Activity",
      conditions: [
        "Acute & Chronic Anal Fissures",
        "Severe Tearing Pain During Defecation",
        "Post-Stool Burning Lasting for Hours",
        "Anal Sphincter Spasms & Tightness",
        "Blood Streaks on Stool or Toilet Paper",
      ],
      benefits: [
        "Relief from acute post-defecation burning and sphincter spasm",
        "Promotes healthy epithelial mucosal tissue recovery",
        "Provides a conservative, gentle first-line approach",
      ],
    },
    {
      id: "homeopathy",
      title: "Homeopathy",
      shortDesc: "Natural healing tailored to your unique constitutional profile for long-term wellness.",
      fullDesc:
        "Classical homeopathy evaluates your full physical constitution, emotional disposition, and health history. Highly individualized, micro-diluted natural remedies are prescribed to stimulate your body's intrinsic self-healing mechanisms without harsh chemical suppression.",
      iconName: "Pill",
      conditions: [
        "Chronic Allergies & Sinusitis",
        "Eczema, Psoriasis & Urticaria",
        "Migraines & Recurring Headaches",
        "Digestive & Acidity Disorders",
        "Hair Fall & Alopecia Areata",
      ],
      benefits: [
        "Personalized single-remedy approach",
        "Formulated to minimize adverse reactions",
        "Safe complementary therapy alongside general health monitoring",
      ],
    },
    {
      id: "general-practice",
      title: "General Practice",
      shortDesc: "Comprehensive primary healthcare and routine medical checkups for your entire family.",
      fullDesc:
        "First-line diagnostic evaluation, preventative health screening, and compassionate management for acute viral infections, fevers, seasonal illnesses, and routine family medical concerns.",
      iconName: "Stethoscope",
      conditions: [
        "Acute Fevers, Cough & Cold",
        "Gastrointestinal Infections",
        "Blood Pressure & Vital Monitoring",
        "Preventative Health Counseling",
        "Seasonal Flu & Viral Care",
      ],
      benefits: [
        "Thorough physical examinations",
        "Evidence-guided clinical oversight",
        "Integrative approach with natural supportive therapies",
      ],
    },
    {
      id: "womens-health",
      title: "Women's Health",
      shortDesc: "Specialized, sensitive care for hormonal harmony and wellness at every stage of life.",
      fullDesc:
        "Non-invasive, holistic support for hormonal imbalances, menstrual irregularities, polycystic ovarian syndrome (PCOS/PCOD), thyroid fluctuations, and menopausal transition symptoms.",
      iconName: "HeartPulse",
      conditions: [
        "PCOS / PCOD Management",
        "Menstrual Irregularities & Dysmenorrhea",
        "Menopausal Symptom Relief",
        "Hormonal Acne & Weight Changes",
        "Postpartum Recovery & Emotional Balance",
      ],
      benefits: [
        "Gentle endocrine & hormonal balance support",
        "Natural remedies without synthetic hormone dependency",
        "Compassionate, confidential consultations",
      ],
    },
    {
      id: "childrens-health",
      title: "Children's Health",
      shortDesc: "Gentle, non-invasive pediatric care supporting strong natural immunity in children.",
      fullDesc:
        "Sweet, easy-to-take natural remedies formulated specifically for infants, toddlers, and growing children. Safe support for recurring colds, enlarged tonsils, poor appetite, teething issues, and childhood skin flare-ups.",
      iconName: "Baby",
      conditions: [
        "Recurring Colds, Coughs & Tonsillitis",
        "Pediatric Bronchitis & Wheezing",
        "Digestive Colic & Teething Distress",
        "Childhood Eczema & Skin Rashes",
        "Immunity Building & Nutritional Support",
      ],
      benefits: [
        "Palatable, non-threatening sweet globules",
        "Gentle action safe for pediatric physiology",
        "Strengthens natural resilience against recurring infections",
      ],
    },
    {
      id: "chronic-disease",
      title: "Chronic Disease",
      shortDesc: "Supportive constitutional care addressing underlying drivers of persistent health issues.",
      fullDesc:
        "Long-term therapeutic management designed to help reduce flare-ups and support constitutional vitality in chronic respiratory disorders, joint pain, autoimmune tendencies, and persistent dermatological conditions.",
      iconName: "Activity",
      conditions: [
        "Bronchial Asthma & Wheezing",
        "Arthritis, Joint Pain & Sciatica",
        "Chronic Psoriasis & Lichen Planus",
        "Hypertension Support & Metabolic Health",
        "Irritable Bowel Syndrome (IBS)",
      ],
      benefits: [
        "Focus on long-term disease moderation",
        "Reduces frequency and intensity of acute episodes",
        "Safe complementary integration with existing doctor prescriptions",
      ],
    },
    {
      id: "lifestyle-disorders",
      title: "Lifestyle Disorders",
      shortDesc: "Holistic strategies addressing modern stress, sleep disturbances, and metabolic fatigue.",
      fullDesc:
        "Modern urban lifestyles can strain the nervous and metabolic systems. We offer individualized therapeutic plans combining constitutional remedies with practical dietary, stress-reduction, and sleep-hygiene guidance.",
      iconName: "Sparkles",
      conditions: [
        "Chronic Stress & Generalized Anxiety",
        "Insomnia & Disrupted Sleep Patterns",
        "Metabolic Sluggishness & Weight Imbalances",
        "Chronic Fatigue & Brain Fog",
        "Work-Related Physical & Mental Burnout",
      ],
      benefits: [
        "Restores nervous system equilibrium",
        "Sustainable dietary and routine recommendations",
        "Enhances daily energy levels and emotional resilience",
      ],
    },
  ],

  pillars: [
    {
      title: "Root-Cause Approach",
      desc: "Investigating constitutional factors and medical history rather than simply masking surface symptoms.",
      iconName: "Search",
    },
    {
      title: "Gentle & Non-Toxic",
      desc: "Micro-diluted natural preparations selected to support recovery with minimal risk of adverse effects.",
      iconName: "ShieldCheck",
    },
    {
      title: "Trusted Experience",
      desc: "Over 20 years of clinical practice providing dedicated, compassionate care to local families.",
      iconName: "Users",
    },
    {
      title: "Personalized Care",
      desc: "Every consultation is tailored to the individual patient's unique physical and emotional profile.",
      iconName: "UserCheck",
    },
  ],

  certificates: [
    {
      id: "cert-mch-digikyd",
      title: 'Official "Know Your Doctor" Digital Accreditation (DigiKYD)',
      issuingAuthority: "Maharashtra Council of Homoeopathy",
      year: "Reg. No. 34913",
      imageUrl: "certificates/cert_mch_digikyd_qr.jpg",
      altText: "Official Maharashtra Council of Homoeopathy DigiKYD Verification Card - Dr. Khobragade Pragati Laxman",
      description: "Official authorized public verification board issued under the Maharashtra Council of Homoeopathy patient safety initiative, with instant digital QR verification.",
    },
    {
      id: "cert-mch-registration",
      title: "State Clinical Practice Certificate of Registration",
      issuingAuthority: "Maharashtra Council of Homoeopathy Mumbai",
      year: "Reg. 2003",
      imageUrl: "certificates/cert_mch_registration_34913.jpg",
      altText: "Official Certificate of Registration No. 34913 - Maharashtra Council of Homoeopathy Mumbai",
      description: "Statutory medical registration certificate under the Mumbai Homoeopathic Practitioners' Act, 1959, bearing official state council stamp, doctor portrait, and registrar seal.",
    },
    {
      id: "cert-singhania-fellowship",
      title: "Fellowship in Facial Aesthetics and Cosmetology",
      issuingAuthority: "Singhania University",
      year: "First Division (2022)",
      imageUrl: "certificates/cert_singhania_fellowship_cosmetology.jpg",
      altText: "Singhania University Fellowship in Facial Aesthetics and Cosmetology - Dr. Pragati Vijay Uplekar",
      description: "Postgraduate University Fellowship in advanced dermatological clinical cosmetology, facial aesthetics, and non-invasive restorative skin care passed in First Division.",
    },
    {
      id: "cert-urban-surveillance",
      title: "Urban Disease Surveillance International Study",
      issuingAuthority: "University of Cologne (Germany) & BVIEER Pune",
      year: "Research (2014)",
      imageUrl: "certificates/cert_urban_disease_surveillance_cologne_2014.jpg",
      altText: "Certificate of Participation in Urban Disease Surveillance - University of Cologne Germany & BVIEER Pune",
      description: "Certificate of Participation honoring clinical research and epidemiologic surveillance of non-communicable diseases in private healthcare, co-conducted with the University of Cologne.",
    },
    {
      id: "cert-mavelil-homoeo",
      title: "Homoeopathy & Biochemistry Clinical Training & Membership",
      issuingAuthority: "Mavelil Homoeo Mission (Trivandrum)",
      year: "First Class (1992)",
      imageUrl: "certificates/cert_mavelil_homoeo_mission_1992.jpg",
      altText: "Mavelil Homoeo Mission Examination & Clinical Membership Certificate - Miss Pragati Laxman Khobragade",
      description: "Extensive clinical examination and board training in homoeopathic principles and biochemistry passed in First Class, establishing over three decades of clinical practice.",
    },
  ],

  youtubeVideos: [
    {
      id: "yt-how-it-works",
      title: "How Homeopathy Medicine Works (Scientific Mechanism)",
      description: "Dr. Pragati Khobragade explains the scientific mechanism of action behind micro-diluted homeopathic remedies and cellular vital force stimulation.",
      youtubeId: "MEphim0ujWk",
      thumbnailUrl: "https://i.ytimg.com/vi/MEphim0ujWk/hqdefault.jpg",
      uploadDate: "2024-02-10",
    },
    {
      id: "yt-sciatica",
      title: "Conquering Sciatica: Pain Management & Rehabilitation Strategies",
      description: "Comprehensive clinical advice on relieving radiating sciatic nerve pain, lumbar spine compression, and restoring pain-free movement naturally.",
      youtubeId: "cE8GKCJuqEQ",
      thumbnailUrl: "https://i.ytimg.com/vi/cE8GKCJuqEQ/hqdefault.jpg",
      uploadDate: "2024-01-18",
    },
    {
      id: "yt-gut-health",
      title: "Gut Health Matters: Causes & Solutions for Chronic Constipation",
      description: "Understanding root digestive triggers, sluggish colon motility, dietary fiber balance, and gentle constitutional remedies.",
      youtubeId: "kHAgbGcQTNA",
      thumbnailUrl: "https://i.ytimg.com/vi/kHAgbGcQTNA/hqdefault.jpg",
      uploadDate: "2024-01-25",
    },
    {
      id: "yt-gastritis",
      title: "Homeopathic Medicine for Gastritis & Acid Reflux",
      description: "Effective natural approaches to soothe gastric mucosa irritation, hyperacidity, bloating, and recurring indigestion.",
      youtubeId: "LlhDOWJFGUk",
      thumbnailUrl: "https://i.ytimg.com/vi/LlhDOWJFGUk/hqdefault.jpg",
      uploadDate: "2024-03-05",
    },
    {
      id: "yt-kidney-health",
      title: "Unlocking Secrets to Optimal Kidney Health: Comprehensive Guide",
      description: "Dr. Pragati Khobragade shares essential preventative measures, hydration protocols, and holistic renal health maintenance.",
      youtubeId: "RCYDKOzETO4",
      thumbnailUrl: "https://i.ytimg.com/vi/RCYDKOzETO4/hqdefault.jpg",
      uploadDate: "2024-02-28",
    },
    {
      id: "yt-gout",
      title: "Gout (संधिरोग): Managing High Uric Acid & Joint Inflammation",
      description: "Guidance on regulating uric acid crystallization, sudden toe and joint swelling, and dietary purine moderation.",
      youtubeId: "GOGTNpfLHNM",
      thumbnailUrl: "https://i.ytimg.com/vi/GOGTNpfLHNM/hqdefault.jpg",
      uploadDate: "2023-12-12",
    },
    {
      id: "yt-back-ache",
      title: "पीठदर्द (Back Ache): Posture, Spinal Health & Natural Relief",
      description: "Exploring underlying musculoskeletal causes of lumbar pain and constitutional homeopathic therapeutics.",
      youtubeId: "Iutu9A0n-Pk",
      thumbnailUrl: "https://i.ytimg.com/vi/Iutu9A0n-Pk/hqdefault.jpg",
      uploadDate: "2023-12-20",
    },
    {
      id: "yt-potentisation",
      title: "Unlocking the Power of Potentisation in Acute & Chronic Conditions",
      description: "How potentisation dynamically prepares micro-diluted remedies for gentle, restorative, and holistic healing.",
      youtubeId: "gcdq5Txnsfo",
      thumbnailUrl: "https://i.ytimg.com/vi/gcdq5Txnsfo/hqdefault.jpg",
      uploadDate: "2024-01-30",
    },
    {
      id: "yt-hair-care",
      title: "Preventing Premature Whitening of Hair: Follicle & Scalp Care",
      description: "Addressing nutritional deficiencies, chronic stress factors, and natural homeopathic hair care routines.",
      youtubeId: "IJgqJ3Pe0-E",
      thumbnailUrl: "https://i.ytimg.com/vi/IJgqJ3Pe0-E/hqdefault.jpg",
      uploadDate: "2024-04-12",
    },
    {
      id: "yt-alfalfa-malt",
      title: "Benefits of Alfalfa Malt: Natural Homeopathic Health Tonic",
      description: "Nutritive tonic benefits for improving appetite, overcoming fatigue, convalescence, and general physical stamina.",
      youtubeId: "m9Fjij8r124",
      thumbnailUrl: "https://i.ytimg.com/vi/m9Fjij8r124/hqdefault.jpg",
      uploadDate: "2024-03-22",
    },
    {
      id: "yt-antibiotics",
      title: "Natural Alternatives: The Role of Homeopathic Anti-infectives",
      description: "Strengthening immune response during seasonal infections without inducing antibiotic resistance or gut dysbiosis.",
      youtubeId: "SaLfeINldk0",
      thumbnailUrl: "https://i.ytimg.com/vi/SaLfeINldk0/hqdefault.jpg",
      uploadDate: "2024-03-18",
    },
    {
      id: "yt-mother-tinctures",
      title: "Harnessing Homeopathic Mother Tinctures for Your Health Journey",
      description: "A practical guide to how concentrated botanical mother tinctures provide direct physiologic organ support.",
      youtubeId: "A9ptWLKs2vA",
      thumbnailUrl: "https://i.ytimg.com/vi/A9ptWLKs2vA/hqdefault.jpg",
      uploadDate: "2024-01-10",
    },
  ],

  faqs: [
    {
      id: "faq-why-safe",
      question: "Why is Homeopathy Safe?",
      answer:
        "Unlike many conventional medications, homeopathic remedies are generally considered gentle and are used in very small quantities. They are commonly chosen by people seeking a gentle approach to healthcare. However, like any treatment, they should be taken under the guidance of a qualified doctor.",
      category: "Safety",
    },
    {
      id: "faq-treatment-all-ages",
      question: "हर उम्र के लोगों के लिए उपयुक्त उपचार (Treatment for All Age Groups)",
      answer:
        "चाहे आपकी समस्या सामान्य हो, त्वचा से संबंधित हो या किसी अन्य स्वास्थ्य समस्या से जुड़ी हो, सही उपचार के लिए अनुभवी डॉक्टर से परामर्श लें।",
      category: "Care",
    },
    {
      id: "faq-experienced-doctor",
      question: "Experienced Doctor – Personalised Treatment",
      answer:
        "Meet our experienced doctor and get the right guidance and personalised treatment according to your health needs.",
      category: "Consultation",
    },
    {
      id: "faq-safety",
      question: "Is homeopathic treatment suitable for infants, pregnant women, and elderly individuals?",
      answer:
        "Homeopathic preparations use highly diluted natural substances and are generally gentle and non-toxic. When prescribed by a qualified practitioner following careful case taking, they are considered suitable for individuals across all age groups, including infants, expectant mothers, and senior patients.",
      category: "Safety",
    },
    {
      id: "faq-timeframe",
      question: "How long does it typically take to observe positive results with homeopathic care?",
      answer:
        "The response time depends on whether the condition is acute or chronic. Acute complaints (such as seasonal colds, sudden coughs, or mild digestive discomfort) often show improvement within hours to a few days. For long-standing chronic conditions like asthma, psoriasis, or PCOS, progress is gradual and constitutional, typically monitored over several weeks to months.",
      category: "Treatment",
    },
    {
      id: "faq-allopathy",
      question: "Can I take homeopathic medicines alongside my existing conventional (allopathic) prescriptions?",
      answer:
        "Yes, in most situations homeopathic remedies can be safely integrated alongside your ongoing allopathic medications. Dr. Pragati reviews your complete medical history and current prescriptions to ensure seamless, coordinated care without abrupt changes to necessary medications.",
      category: "Medication",
    },
    {
      id: "faq-diet",
      question: "Are there specific dietary guidelines to observe while taking homeopathic remedies?",
      answer:
        "A common guideline is to avoid consuming strongly aromatic substances (such as raw garlic, raw onions, or strong coffee) within 15 to 20 minutes before and after taking your remedy dose. Dr. Pragati provides personalized dietary and lifestyle advice tailored to your specific health concern.",
      category: "Guidance",
    },
    {
      id: "faq-consultation-process",
      question: "What happens during the initial consultation at Perfect Health Center?",
      answer:
        "The first visit involves an in-depth case study spanning 30 to 45 minutes. Dr. Pragati listens closely to your primary complaints, medical background, lifestyle habits, stress factors, and constitutional characteristics before recommending a tailored treatment plan.",
      category: "Appointments",
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Doctor Consultation Suite",
      subtitle: "Dedicated, private clinical consultation room",
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      altText: "Dr. Pragati Consultation Suite at Perfect Health Center Diva East",
    },
    {
      id: "gal-2",
      title: "Reception & Waiting Lounge",
      subtitle: "Serene, welcoming healing atmosphere",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      altText: "Reception and Waiting Area Perfect Health Center",
    },
    {
      id: "gal-3",
      title: "Natural Remedies Bay",
      subtitle: "Organized storage of high-purity homeopathic preparations",
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      altText: "Homeopathic Remedy Bottles and Dispensary",
    },
    {
      id: "gal-4",
      title: "Clinical Checkup Area",
      subtitle: "Primary healthcare examinations & vital checks",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      altText: "Patient Clinical Examination Station",
    },
    {
      id: "gal-5",
      title: "Constitutional Dispensary",
      subtitle: "Custom-prepared remedies tailored to patient constitution",
      imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      altText: "Individualized Natural Formulations Bay",
    },
    {
      id: "gal-6",
      title: "Holistic Health Space",
      subtitle: "Calm environment designed for patient comfort",
      imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      altText: "Holistic Wellness Environment at Perfect Health Center",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "S. Kulkarni",
      condition: "Chronic Asthma & Dust Allergy",
      comment:
        "Dr. Pragati's patient approach and accurate remedies helped reduce my recurring asthma attacks significantly. Her detailed questioning made all the difference.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "P. Sharma",
      condition: "Pediatric Immunity & Tonsillitis",
      comment:
        "My 6-year-old son used to fall sick every month with throat infections. With gentle homeopathic treatment, his immunity has improved remarkably without harsh antibiotics.",
      rating: 5,
    },
    {
      id: "test-3",
      name: "R. Mehta",
      condition: "Skin Eczema & Allergies",
      comment:
        "I struggled with eczema flare-ups for years. The constitutional treatment at Perfect Health Center Diva East helped soothe the irritation from the root.",
      rating: 5,
    },
  ],
};
