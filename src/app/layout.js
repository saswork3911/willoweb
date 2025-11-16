import './globals.css'

export const metadata = {
  title: 'Willowood - Transforming Agriculture',
  description: 'Leading the revolution in sustainable agriculture with breakthrough innovations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet" />
      </head>
      <body className="font-['Inter'] text-[#333] overflow-x-hidden bg-white">{children}</body>
    </html>
  )
}