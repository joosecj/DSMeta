// pega a variavel de ambiente, caso não tenha pega o valor da variavel de ambiente. 
export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";