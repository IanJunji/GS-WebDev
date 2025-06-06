// Função para obter usuários do localStorage
const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

// Função para cadastrar um novo usuário
export const register = (name, email, password) => {
  const users = getUsers();
  
  // Verifica se o email já está cadastrado
  if (users.some(user => user.email === email)) {
    throw new Error('Este email já está cadastrado');
  }
  
  // Adiciona o novo usuário
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  return { success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } };
};

// Função para fazer login
export const login = (email, password) => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Email ou senha inválidos');
  }
  
  // Salva o usuário logado no localStorage
  localStorage.setItem('currentUser', JSON.stringify({
    id: user.id,
    name: user.name,
    email: user.email
  }));
  
  return { success: true, user: { id: user.id, name: user.name, email: user.email } };
};

// Função para fazer logout
export const logout = () => {
  localStorage.removeItem('currentUser');
  return { success: true };
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  return !!localStorage.getItem('currentUser');
};

// Função para obter o usuário atual
export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};
