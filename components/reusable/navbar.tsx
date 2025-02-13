"use client";
import { info } from "@/utils/data/app-info";
import Image from "next/image";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '#features', current: true },
  { name: 'Donate Today', href: 'donate', current: false },
  { name: 'Privacy Policy', href: 'privacy-policy', current: false },
  { name: 'Contact Us', href: '#contact-us', current: false },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <a href="https://songlib.vercel.app/">
                <Image src={info.appIcon} width={20} height={20} alt="SongLib" className="w-10"/>
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[#b86918] text-white' : 'text-[#b86918] hover:bg-[#bf360c] hover:text-white',
                      'rounded-md px-3 py-2 text-xl font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              className="rounded-xl border border-solid border-transparent flex items-center justify-center bg-[#bf360c] gap-2 hover:bg-[#b86918] dark:hover:bg-[#b86918] sm:text-base h-10 sm:h-12 px-4 sm:px-12 text-xs md:text-sm font-medium md:font-semibold"
              href="download"
              role="button"
              rel="noopener noreferrer"
            >
              <span className="text-xl">{info.callout}</span>
            </Link>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-[#b86918] text-white' : 'text-gray-300 hover:bg-[#bf360c] hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;