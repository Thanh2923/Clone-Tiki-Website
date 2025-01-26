'use client';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store'; // Import store Redux
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { Suspense } from 'react';
import Loading from '@/components/loading/Loading';
type ReduxProviderProps = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children}: ReduxProviderProps) {
  return (
    <SessionProvider>
      <Provider store={store}> 
      <Suspense fallback={<Loading/>}>
        <Header />
        <main className="w-full flex items-center justify-center">

        
       
          <div className="w-[95%] py-5 flex justify-between">
            {children}
          </div>
        </main>
        <Footer />
        </Suspense>
      </Provider>
    </SessionProvider>
  );
}
