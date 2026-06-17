"use client";

import React, { createContext, useContext } from "react";
import { siteConfig as fallbackConfig } from "@/config/site";

type SiteConfigType = typeof fallbackConfig;

const SiteConfigContext = createContext<SiteConfigType>(fallbackConfig);

export function SiteConfigProvider({ 
    children, 
    initialConfig 
}: { 
    children: React.ReactNode, 
    initialConfig: SiteConfigType 
}) {
    return (
        <SiteConfigContext.Provider value={initialConfig}>
            {children}
        </SiteConfigContext.Provider>
    );
}

export function useSiteConfig() {
    return useContext(SiteConfigContext);
}
