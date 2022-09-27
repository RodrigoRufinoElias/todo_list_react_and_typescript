// Técnica utilizada p/ mascarar os arquivos ".module.css" em módulos.
// Assim, eles podem ser declarados dentro dos componentes p/ serem utilizados naquele escopo específico.
// OBS: O React + JS permite fazer isso nativamente, mas o React + TS não.
// Por isso é necessário este workaround.
declare module "*.module.css";