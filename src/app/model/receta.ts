export interface Receta {
    id: string | null;
    nombre: string | null | undefined;
    ingredientes: string | null | undefined;
    instrucciones: string | null | undefined;
    imagen: string | null | undefined;
    usuario: string | null | undefined;
}