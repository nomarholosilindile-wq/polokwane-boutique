/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import {Navbar} from './components/Navbar';
import {HomePage} from './components/HomePage';
import {AboutPolicy} from './components/AboutPolicy';
import {Footer} from './components/Footer';

export default function App() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />
      <main>
        <HomePage />
        <AboutPolicy />
      </main>
      <Footer />
    </div>
  );
}
