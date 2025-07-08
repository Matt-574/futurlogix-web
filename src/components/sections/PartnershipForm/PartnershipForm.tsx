import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from './PartnershipForm.module.css';

const PartnershipForm: React.FC = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simular una llamada a la API
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula un retraso de 2 segundos
      // Aquí iría la lógica real para enviar el formulario (e.g., a Firebase Functions)
      setStatus('success');
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus('error');
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.successMessage}
          >
            <h3 className={styles.successTitle}>¡Gracias!</h3>
            <p className={styles.successText}>Hemos recibido tu mensaje. Un estratega de nuestro equipo se pondrá en contacto contigo en las próximas 48 horas para agendar una primera conversación.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className={styles.form}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.formGroup}>
              <input type="text" placeholder="Nombre Completo" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Email de Empresa" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Nombre de la Empresa" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <select className={styles.select} required>
                <option value="">Tu Rol</option>
                <option value="founder">Fundador/C-Level</option>
                <option value="director">Director</option>
                <option value="manager">Manager</option>
                <option value="other">Otro</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <select className={styles.select} required>
                <option value="">Número de Empleados</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Describe en una frase el mayor obstáculo para tu crecimiento exponencial." className={styles.textarea} rows={4} required></textarea>
            </div>
            <button type="submit" className={styles.button} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Enviando...' : 'Iniciar mi Diagnóstico'}
            </button>
            {status === 'error' && (
              <p className={styles.errorMessage}>Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default PartnershipForm;
