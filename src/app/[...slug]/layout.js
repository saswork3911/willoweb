import Navbar from '../../components/sections/Navbar'
import Footer from '../../components/sections/Footer';

export default function DynamicLayout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar></Navbar>
            {/* You can add a common header banner or breadcrumbs here if needed */}
            {children}
            <Footer />
        </div>
    );
}
