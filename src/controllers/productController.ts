import { Request, Response } from 'express';
import { productRepository } from '../repositories/productRepository'; // Corrija o caminho e nome do módulo

const productRepository = new productRepository();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await productRepository.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await productRepository.addUser(name, email);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar usuário' });
  }
};
