/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/CarSelectorContext'


export default function Steps() {
  const {state} = useContext(CarSelectorContext)
 
  return (
    <nav aria-label="Progress" className='whitespace-nowrap bg-gray-200 dark:bg-gray-800 mb-8'>
      <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-400 hidden md:flex md:divide-y-0">
        {state.map((step, stepIdx) => (
          <li key={step.name} className="relative  md:flex md:flex-1">
            {step.status === 'complete' ? (
              <a href={step.href} className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 dark:bg-orange-400 group-hover:bg-orange-500 dark:group-hover:bg-orange-400">
                    <CheckIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-orange-500 dark:text-orange-300">{step.name}</span>
                </span>
              </a>
            ) : step.status === 'current' ? (
              <a href={step.href} className="flex items-center px-6 py-4 text-sm font-medium " aria-current="step">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-orange-500 dark:border-orange-400">
                  <span className="text-orange-500 dark:text-orange-400">{step.step}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-orange-500 dark:text-orange-400">{step.name}</span>
              </a>
            ) : (
              <a href={step.href} className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-orange-400">
                    <span className="text-gray-500 group-hover:text-orange-400">{step.step}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-orange-400">{step.name}</span>
                </span>
              </a>
            )}

            {stepIdx !== state.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div className="absolute top-0 right-0 hidden h-full w-5 md:block" aria-hidden="true">
                  <svg
                    className="h-full w-full text-gray-400"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
