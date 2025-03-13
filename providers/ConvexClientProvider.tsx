"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {  ConvexReactClient } from "convex/react";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL =  process.env.NEXT_PUBLIC_CONVEX_URL || " ";
// const CLERK_PUB_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY; process.env.CLERK_JWT_ISSUER_DOMAIN

const convex = new ConvexReactClient(CONVEX_URL);
const ConvexClientProviders = ({ children }: Props) => {
  return (
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/overview">
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
      </ClerkProvider> 
  );
};


export default ConvexClientProviders;
