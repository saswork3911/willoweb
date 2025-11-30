
  export  const structuredData = [
      {
        type: "organization",
        data: {
          name: "Willowood",
          url: "https://www.willowood.com/",
          logo: "https://www.willowood.com/assets/images/logo.svg",
          description: "Leading Agri-inputs Company providing crop protection products and solutions",
          founder: { "@type": "Person", "name": "Vijay Mundhra" },
          sameAs: [
            "https://twitter.com/willowood",
            "https://linkedin.com/company/willowood",
            "https://facebook.com/willowood",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Farm Road",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411028",
            addressCountry: "India",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-1234567890",
            contactType: "customer service",
          },
        },
      },
      {
        type: "FAQPage",
        data: {
          mainEntity: [
            {
              "@type": "Question",
              name: "What are your crop protection products?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer a range of fungicides, herbicides, and bio-pesticides for effective crop protection.",
              },
            },
            {
              "@type": "Question",
              name: "Where is Willowood located?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our headquarters is in Pune, Maharashtra, India.",
              },
            },
          ],
        },
      },
      
    ];
  
  