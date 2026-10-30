'use client';

import bcrypt from 'bcryptjs';

const STORAGE_KEY = 'auth_user';

export async function login(
  username: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  // Загрузка JSON с пользователями
  const res = await fetch('/data/users.json');
  if (!res.ok) return { success: false, error: 'Не удалось загрузить данные' };

  const users: { username: string; hash: string }[] = await res.json();
  const user = users.find((u) => u.username === username);

  if (!user) return { success: false, error: 'Неверный логин или пароль' };

  const valid = await bcrypt.compare(password, user.hash);
  if (!valid) return { success: false, error: 'Неверный логин или пароль' };

  // Сохранение состояния входа
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ username, loginAt: Date.now() }));
  return { success: true };
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getCurrentUser(): { username: string } | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const data = JSON.parse(raw);
    // Простая проверка срока действия: истекает через 7 дней
    if (Date.now() - data.loginAt > 7 * 24 * 60 * 60 * 1000) {
      logout();
      return null;
    }
    return { username: data.username };
  } catch {
    return null;
  }
}