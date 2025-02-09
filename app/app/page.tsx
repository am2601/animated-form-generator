import Image from "next/image";
import Link from "next/link";

const templates = [
    {
      name: 'Dog',
      href: '/dog',
      description: 'Cute animated dog interacting with login form',
      imageSrc: '/dog.png',
      imageAlt: 'Login form with cute dog',
    },
    {
      name: 'Arctic Theme',
      href: '/arctic',
      description: 'Arctic theme with animated penguin',
      imageSrc: '/arctic.png',
      imageAlt: 'Login form with penguin',
    },
    {
      name: 'Yeti',
      href: '/yeti',
      description: 'Animated yeti.',
      imageSrc: '/yeti.png',
      imageAlt: 'Login form with yeti',
    },
  ]

  export default function Page() {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold text-center">Choose a template</h1>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 mt-16">
          {templates.map((template) => (
            <div
              key={template.name}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="relative aspect-[3/4] w-full bg-gray-200 sm:aspect-auto sm:h-96">
                <Image
                  alt={template.imageAlt}
                  src={template.imageSrc}
                  fill
                  className="object-cover group-hover:opacity-75"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={"/app/templates" + template.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    <h3 className="text-xl">{template.name}</h3>
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
