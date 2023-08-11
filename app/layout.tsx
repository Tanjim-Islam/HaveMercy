import './globals.css'
import { Nunito } from 'next/font/google'

import Navbar from "./views/components/navbar/Navbar"
import ToasterProvider from "./providers/ToasterProvider";

import RegisterModal from './views/components/modals/RegisterModal';
import LoginModal from "./views/components/modals/LoginModal";
import RentModal from "./views/components/modals/RentModal";


import getCurrentUser from './controllers/actions/getCurrentUser';
import ClientOnly from './views/components/ClientOnly';
import { CrispProvider } from './views/components/crisp-provider';
import SearchModal from './views/components/modals/SearchModal';



const font = Nunito({ 

  subsets: ['latin'] 

})

export const metadata = {  
  title: "HomieStay",
  description: "This is a University Project",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <CrispProvider />
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <SearchModal />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
