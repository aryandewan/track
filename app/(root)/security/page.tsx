"use client"

import { Button } from "@/components/ui/button";
import { mono } from "@/config/fonts"
import { CircleCheck, CircleCheckBig, FingerprintPattern, LockKeyhole, Shield, Vibrate,  } from "lucide-react"

const page = () => {
  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center ${mono.className} px-5 bg-[#f6f5ee] space-y-5`}
    >
      <div className="grid grid-cols-2 gap-5 text-background">
        <div className="bg-muted p-6 rounded-xl space-y-2 md:space-y-5 border border-background/50 col-span-2 md:col-span-1">
          <LockKeyhole className="text-background p-2 bg-background/10 size-10 rounded-xl" />
          <h3 className="text-xl md:text-3xl font-bold">AES-256 DATA ENCRYPTION</h3>
          <p className="text-gray-600 max-w-lg hidden md:block">
            We utilize bank-level AES-256 encryption for all data at rest and in
            transit. This is the same standard used by governments and financial
            institutions.
          </p>
          <hr />
          <h3 className="text-sm md:text-base">MILITARY-GRADE STANDARD</h3>
        </div>
        <div className="bg-muted p-6 rounded-xl space-y-2 md:space-y-5 border border-background/50 row-start-2 col-span-2 md:col-span-1 md:row-start-1 md:col-start-2">
          <Vibrate className="text-background p-2 bg-background/10 size-10 rounded-xl" />
          <h3 className="text-xl md:text-3xl font-bold">2FA</h3>
          <p className="text-gray-600 max-w-lg hidden md:block">
            Every account is fortified with mandatory Two-Factor Authentication
            (2FA). Whether you choose biometrics, authenticator apps, or
            security keys, your identity is verified through multiple
            independent channels.
          </p>
          <hr />
          <h3 className="text-sm md:text-base">ROBUST IDENTITY VERIFICATION</h3>
        </div>
        <div className="bg-muted p-6 rounded-xl space-y-2 md:space-y-5 border border-background/50 row-start-3 col-span-2 md:col-span-1 md:row-start-2 md:col-start-1">
          <FingerprintPattern className="text-background p-2 bg-background/10 size-10 rounded-xl" />
          <h3 className="text-xl md:text-3xl font-bold">Sovereign Data Ownership</h3>
          <p className="text-gray-600 max-w-lg hidden md:block">
            Your data belongs to you. We strictly adhere to "Privacy by Design"
            principles, ensuring you have complete control over your financial
            records. We never sell your information.
          </p>
          <hr />
          <h3 className="text-sm md:text-base">PRIVACY BY DESIGN</h3>
        </div>
        <div className="bg-muted p-6 rounded-xl space-y-2 md:space-y-5 border border-background/50 row-start-4 col-span-2 md:col-span-1 md:row-start-2 md:col-start-2">
          <CircleCheckBig className="text-background p-2 bg-background/10 size-10 rounded-xl" />
          <h3 className="text-xl md:text-3xl font-bold">Continous Security Audits</h3>
          <p className="text-gray-600 max-w-lg hidden md:block">
            Our systems undergo rigorous third-party penetration testing and
            compliance audits. We maintain SOC 2 Type II compliance to verify
            that our security controls meet the highest industry standards.
          </p>
          <hr />
          <h3 className="text-sm md:text-base">PROACTIVE RISK MANAGEMENT</h3>
        </div>
      </div>
    </section>
  );
}
export default page