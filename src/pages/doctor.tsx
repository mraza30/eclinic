import React from 'react';
import { StandardLayout } from '@/layouts/Standard';
import Doctor from '@/components/headers/Doctor';
import data from '@/components/headers/DoctorsData';

export default function DoctorPage() {
  const doctors = data.map((item) => {
    return <Doctor key={item.id} {...item} />;
  });

  return (
    <>
      <div className="mt-12 h-full w-full flex-col bg-black">
        <div className="flex w-full border-spacing-8 border border-purple-900 bg-black ">
          <div className="h-100 mx-28 mt-10">
            <h1 className="font-mono text-xl font-bold text-white decoration-auto">
              Best Dermatologist In Lahore
            </h1>
            <h3 className="font-mono text-sm text-white decoration-auto">
              Dermatologist also known as Skin Specialist, ماہرامراض جلد , Skin
              Doctor and Mahir-e-imraz-e-jild
            </h3>
          </div>
        </div>

        <div>{doctors}</div>

        <div className=" flex w-full border-spacing-8 border border-green-900 bg-black">
          <div className="mx-10 mt-10 w-full bg-gray-900 text-center md:hidden">
            <h1 className="text-md mt-4 font-mono font-semibold text-white decoration-auto">
              Get Expert Skin Care From The Best Dermatologists In Pakistan
            </h1>
            <h3 className="text-xm mt-4 font-mono text-white decoration-auto">
              Need to see a dermatologist in Pakistan for the best treatment of
              your skin conditions? Marham makes it easy to book an appointment
              with top skin specialist in your area. Our dermatologists are
              highly trained and experienced in treating a range of
              dermatological issues, including acne, eczema, hair loss, warts
              removal and more. Trust Marham to connect you with the top
              verified and best dermatologist in Pakistan to meet your specific
              skin care needs and get the highest quality care available.
            </h3>

            <h1 className="text-md mt-4 font-mono font-semibold text-white decoration-auto">
              Who is Dermotologist ?
            </h1>
            <h3 className="text-xm mt-4 font-mono text-white decoration-auto">
              A dermatologist is a skin doctor who specializes in skin, hair,
              and nail care. Dermatologist in Pakistan is trained to diagnose
              and treat a wide range of skin conditions, as well as provide
              cosmetic procedures for enhanced appearance. Dermatologists are
              crucial for maintaining healthy skin and hair.
            </h3>

            <h1 className="text-md mt-4 font-mono font-semibold text-white decoration-auto">
              What is Dermotology ?
            </h1>
            <h3 className="text-xm mt-4 font-mono text-white decoration-auto">
              Dermatology is a medical specialty that focuses on the diagnosis
              and treatment of conditions affecting the skin, hair, and nails.
              It encompasses both medical and surgical approaches. A
              dermatologist is a highly trained physician who specializes in the
              management of skin-related diseases and certain cosmetic concerns.
            </h3>

            <h1 className="text-md mt-4 font-mono font-semibold text-white decoration-auto">
              What does Dermotologist do?
            </h1>

            <h3 className="text-xm mt-4 font-mono text-white decoration-auto">
              A dermatologist in Pakistan provides services for diagnosing and
              treating skin-related conditions. The skin doctor also deals with
              diseases of skin, hair, and nails. The skin specialist provides
              cosmetic services as well to improve the appearance and tone of
              the skin, including:
              <ul>
                <li>
                  Diagnose and treat conditions affecting the skin, and hair
                </li>
                <li>
                  Perform medical and surgical procedures to treat skin
                  conditions
                </li>
                <li>
                  Prescribe medications to treat skin all types of skin
                  conditions
                </li>
              </ul>
            </h3>

            <h1 className="text-md mt-4 font-mono font-semibold text-white decoration-auto">
              What conditions does Dermotologist treat?
            </h1>
            <h3 className="text-xm mt-4 font-mono text-white decoration-auto">
              A dermatologist is an expert skin doctor in treating a range of
              skin conditions like;
              <ul>
                <li className="italic">
                  Eczema: A condition that makes your skin red and itchy and is
                  treated by your dermatologist using ointments and creams
                </li>
                <li className=" italic">
                  Pimples: They are small pustules that are raised on the skin
                  due to excessive sebum production and dust which are routinely
                  managed by a dermatologist based on the severity of the skin
                  condition
                </li>
                <li className=" italic">
                  Dermatitis: A dermatologist treats red itchy rash and inflamed
                  skin by prescribing skin creams and moisturizers
                </li>
                <li className=" italic">
                  Acne: Clogging hair follicles with oil, dirt, or dead cells
                  can cause acne. The best dermatologist determines the severity
                  to prescribe required skin ointments
                </li>
                <li className=" italic">
                  Hair loss: A dermatologist provides treatment for hair loss
                  using injections, medicines, and laser therapy
                </li>
                <li className=" italic">
                  Warts: Your skin doctor provides peeling medicines or removes
                  the skin outgrowths through surgical excision.
                </li>
              </ul>
            </h3>
          </div>

          <div className="mx-28 mt-10 hidden w-full bg-gray-900 md:block">
            <h1 className="mx-10 mt-5 hidden font-mono text-lg font-semibold text-white decoration-auto md:block">
              Get Expert Skin Care From The Best Dermatologists In Pakistan
            </h1>
            <h3 className="mx-10 mt-2 font-mono text-sm text-white decoration-auto ">
              Need to see a dermatologist in Pakistan for the best treatment of
              your skin conditions? Marham makes it easy to book an appointment
              with top skin specialist in your area. Our dermatologists are
              highly trained and experienced in treating a range of
              dermatological issues, including acne, eczema, hair loss, warts
              removal and more. Trust Marham to connect you with the top
              verified and best dermatologist in Pakistan to meet your specific
              skin care needs and get the highest quality care available.
            </h3>

            <h1 className="mx-10 mt-5 font-mono text-lg font-semibold text-white decoration-auto">
              Who is Dermotologist ?
            </h1>
            <h3 className="mx-10 mt-2 font-mono text-sm text-white decoration-auto ">
              A dermatologist is a skin doctor who specializes in skin, hair,
              and nail care. Dermatologist in Pakistan is trained to diagnose
              and treat a wide range of skin conditions, as well as provide
              cosmetic procedures for enhanced appearance. Dermatologists are
              crucial for maintaining healthy skin and hair.
            </h3>

            <h1 className="mx-10 mt-5 font-mono text-lg font-semibold text-white decoration-auto">
              What is Dermotology ?
            </h1>
            <h3 className="mx-10 mt-2 font-mono text-sm text-white decoration-auto ">
              Dermatology is a medical specialty that focuses on the diagnosis
              and treatment of conditions affecting the skin, hair, and nails.
              It encompasses both medical and surgical approaches. A
              dermatologist is a highly trained physician who specializes in the
              management of skin-related diseases and certain cosmetic concerns.
            </h3>

            <h1 className="mx-10 mt-5 font-mono text-lg font-semibold text-white decoration-auto">
              What does Dermotologist do?
            </h1>

            <h3 className="mx-10 mt-2 font-mono text-sm text-white decoration-auto ">
              A dermatologist in Pakistan provides services for diagnosing and
              treating skin-related conditions. The skin doctor also deals with
              diseases of skin, hair, and nails. The skin specialist provides
              cosmetic services as well to improve the appearance and tone of
              the skin, including:
              <ul>
                <li className="mx-4 mt-2">
                  Diagnose and treat conditions affecting the skin, and hair
                </li>
                <li className="mx-4 mt-2">
                  Perform medical and surgical procedures to treat skin
                  conditions
                </li>
                <li className="mx-4 mt-2">
                  Prescribe medications to treat skin all types of skin
                  conditions
                </li>
              </ul>
            </h3>

            <h1 className="mx-10 mt-5 font-mono text-lg font-semibold text-white decoration-auto">
              What conditions does Dermotologist treat?
            </h1>
            <h3 className="mx-10 mt-2 font-mono text-sm text-white decoration-auto ">
              A dermatologist is an expert skin doctor in treating a range of
              skin conditions like;
              <ul>
                <li className="mx-4 mt-2 italic">
                  Eczema: A condition that makes your skin red and itchy and is
                  treated by your dermatologist using ointments and creams
                </li>
                <li className="mx-4 mt-2 italic">
                  Pimples: They are small pustules that are raised on the skin
                  due to excessive sebum production and dust which are routinely
                  managed by a dermatologist based on the severity of the skin
                  condition
                </li>
                <li className="mx-4 mt-2 italic">
                  Dermatitis: A dermatologist treats red itchy rash and inflamed
                  skin by prescribing skin creams and moisturizers
                </li>
                <li className="mx-4 mt-2 italic">
                  Acne: Clogging hair follicles with oil, dirt, or dead cells
                  can cause acne. The best dermatologist determines the severity
                  to prescribe required skin ointments
                </li>
                <li className="mx-4 mt-2 italic">
                  Hair loss: A dermatologist provides treatment for hair loss
                  using injections, medicines, and laser therapy
                </li>
                <li className="mx-4 mt-2 italic">
                  Warts: Your skin doctor provides peeling medicines or removes
                  the skin outgrowths through surgical excision.
                </li>
              </ul>
            </h3>
          </div>
        </div>

        <div className="h-50 mt-48 flex w-full bg-black"></div>
      </div>
    </>
  );
}
