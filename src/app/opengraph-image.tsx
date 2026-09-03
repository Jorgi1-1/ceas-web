import { ImageResponse } from "next/og";

/**
 * Imagen de Open Graph para todo el sitio.
 *
 * Va como convención de archivo y no como campo `images` dentro de `metadata`
 * a propósito: Next reemplaza el objeto `openGraph` completo cuando una página
 * lo redefine, así que cualquier ruta que declarara su propio título social
 * perdía la imagen heredada del layout. La convención de archivo se resuelve
 * por segmento y sobrevive a esas redefiniciones.
 *
 * 1200×630 es la proporción que esperan WhatsApp, Facebook y la tarjeta
 * `summary_large_image` de X — el canal por el que realmente llega esta escuela.
 */
export const alt =
    "CEAS — Centro de Estudios Avanzados en Salud, escuela de terapias manuales en Puebla";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    background: "linear-gradient(135deg, #00344F 0%, #005E86 55%, #0098D4 100%)",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: 999,
                            background: "#7FD4F5",
                        }}
                    />
                    <div
                        style={{
                            color: "#9FDDF6",
                            fontSize: 22,
                            fontWeight: 700,
                            letterSpacing: 3,
                            textTransform: "uppercase",
                        }}
                    >
                        Puebla, México
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            color: "#FFFFFF",
                            fontSize: 82,
                            fontWeight: 700,
                            lineHeight: 1.05,
                            letterSpacing: -2,
                        }}
                    >
                        Centro de Estudios
                    </div>
                    <div
                        style={{
                            color: "#FFFFFF",
                            fontSize: 82,
                            fontWeight: 700,
                            lineHeight: 1.05,
                            letterSpacing: -2,
                        }}
                    >
                        Avanzados en Salud
                    </div>
                    <div
                        style={{
                            marginTop: 28,
                            color: "#CDEBF9",
                            fontSize: 30,
                            lineHeight: 1.4,
                            maxWidth: 820,
                        }}
                    >
                        Quiroterapia, masajes y habilitación física funcional.
                        Diplomados presenciales con diploma avalado por la SEP.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1px solid rgba(255,255,255,0.22)",
                        paddingTop: 28,
                    }}
                >
                    <div style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 700 }}>
                        ceas.com.mx
                    </div>
                    <div style={{ color: "#9FDDF6", fontSize: 22, letterSpacing: 1 }}>
                        Clave SEP 21PBT0505Q DGCFT
                    </div>
                </div>
            </div>
        ),
        size
    );
}
