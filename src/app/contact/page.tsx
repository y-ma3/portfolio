'use client';

import { useState } from 'react';
import { TextField, Button, Typography, Stack } from '@mui/material';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('送信されました！');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="お名前"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="メールアドレス"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="お問い合わせ内容"
            name="message"
            value={form.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary">
            送信
          </Button>
        </Stack>
      </form>
    </div>
  );
}