import { siteConfig as fallbackConfig } from "@/config/site";

export async function getSiteConfig() {
    try {
        const res = await fetch(
            `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/config/siteConfig`,
            { 
                cache: "no-store" // Fix: Next.js cacheaba los resultados, forzamos a traer siempre la versión más reciente
            }
        );
        
        if (!res.ok) {
            return fallbackConfig;
        }

        const data = await res.json();
        
        if (data.fields) {
            // Helper function to convert Firestore REST API format to standard JSON
            const parseFirestoreData = (fields: any): any => {
                const parsed: any = {};
                for (const key in fields) {
                    const value = fields[key];
                    if (value.stringValue !== undefined) parsed[key] = value.stringValue;
                    else if (value.integerValue !== undefined) parsed[key] = parseInt(value.integerValue, 10);
                    else if (value.doubleValue !== undefined) parsed[key] = parseFloat(value.doubleValue);
                    else if (value.booleanValue !== undefined) parsed[key] = value.booleanValue;
                    else if (value.mapValue !== undefined) parsed[key] = parseFirestoreData(value.mapValue.fields);
                    else if (value.arrayValue !== undefined) {
                        parsed[key] = value.arrayValue.values ? value.arrayValue.values.map((v: any) => {
                            if (v.stringValue !== undefined) return v.stringValue;
                            if (v.mapValue !== undefined) return parseFirestoreData(v.mapValue.fields);
                            return v;
                        }) : [];
                    }
                }
                return parsed;
            };

            return parseFirestoreData(data.fields);
        }
        
        return fallbackConfig;
    } catch (e) {
        console.error("Error fetching site config from Firestore:", e);
        return fallbackConfig;
    }
}
