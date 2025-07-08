import { collection, getDocs, query, where, addDoc, Timestamp, limit } from "firebase/firestore";
import { db } from "../firebase-config";

// Interfaz para definir la estructura de un Caso de Éxito
export interface CaseStudy {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  title: string;
  mainImage: string;
  clientLogo: string;
  keyMetrics: Array<{ value: string; label: string }>;
  context: string;
  solution: string;
  impact: string;
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

// Interfaz para definir la estructura de un Artículo
export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  isFeatured: boolean;
}

// Interfaz para el formulario de contacto
export interface PartnershipInquiry {
  fullName: string;
  companyEmail: string;
  companyName: string;
  role: string;
  employeeCount: string;
  mainChallenge: string;
  timestamp: Timestamp;
}

// Referencias a las colecciones de Firestore
const caseStudiesCollectionRef = collection(db, "caseStudies");
const articlesCollectionRef = collection(db, "articles");
const partnershipInquiriesCollectionRef = collection(db, "partnershipInquiries");
const subscriptionsCollectionRef = collection(db, "subscriptions");

/**
 * Obtiene todos los casos de éxito de la base de datos.
 * @returns Una promesa que se resuelve con un array de objetos CaseStudy.
 */
export const getCaseStudies = async (): Promise<CaseStudy[]> => {
  try {
    const querySnapshot = await getDocs(caseStudiesCollectionRef);
    const caseStudies = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as CaseStudy[];
    return caseStudies;
  } catch (error) {
    console.error("Error fetching case studies: ", error);
    return [];
  }
};

/**
 * Obtiene un caso de éxito específico por su slug.
 * @param slug - El slug único del caso de éxito.
 * @returns Una promesa que se resuelve con el objeto CaseStudy o null si no se encuentra.
 */
export const getCaseStudyBySlug = async (slug: string): Promise<CaseStudy | null> => {
  try {
    const q = query(caseStudiesCollectionRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No matching document found for slug:", slug);
      return null;
    }
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() } as CaseStudy;
  } catch (error) {
    console.error("Error fetching case study by slug: ", error);
    return null;
  }
};

/**
 * Obtiene todos los artículos de la base de datos.
 * @returns Una promesa que se resuelve con un array de objetos Article.
 */
export const getArticles = async (): Promise<Article[]> => {
  try {
    const querySnapshot = await getDocs(articlesCollectionRef);
    const articles = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Article[];
    return articles;
  } catch (error) {
    console.error("Error fetching articles: ", error);
    return [];
  }
};

/**
 * Obtiene un artículo específico por su slug.
 * @param slug - El slug único del artículo.
 * @returns Una promesa que se resuelve con el objeto Article o null si no se encuentra.
 */
export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  try {
    const q = query(articlesCollectionRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() } as Article;
  } catch (error) {
    console.error("Error fetching article by slug: ", error);
    return null;
  }
};

/**
 * Obtiene el artículo destacado.
 * @returns Una promesa que se resuelve con el objeto Article destacado o null si no hay ninguno.
 */
export const getFeaturedArticle = async (): Promise<Article | null> => {
  try {
    const q = query(articlesCollectionRef, where("isFeatured", "==", true), limit(1));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() } as Article;
  } catch (error) {
    console.error("Error fetching featured article: ", error);
    return null;
  }
};

/**
 * Envía los datos del formulario de contacto a Firestore.
 * @param formData - Objeto con los datos del formulario.
 * @returns Una promesa que se resuelve cuando los datos se han guardado.
 */
export const submitContactForm = async (formData: Omit<PartnershipInquiry, 'timestamp'>): Promise<void> => {
  try {
    await addDoc(partnershipInquiriesCollectionRef, {
      ...formData,
      timestamp: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error submitting contact form: ", error);
    throw error; // Relanzar el error para que el componente que llama pueda manejarlo
  }
};

/**
 * Envía el email de suscripción a Firestore.
 * @param email - El correo electrónico a suscribir.
 * @returns Una promesa que se resuelve cuando el email se ha guardado.
 */
export const submitSubscription = async (email: string): Promise<void> => {
  try {
    await addDoc(subscriptionsCollectionRef, {
      email: email,
      timestamp: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error submitting subscription: ", error);
    throw error;
  }
};