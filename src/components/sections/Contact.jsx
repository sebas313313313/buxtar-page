/**
 * Contact section.
 * Form with validation, sanitization, and rate limiting.
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import useFormValidation from '../../hooks/useFormValidation';
import useRateLimit from '../../hooks/useRateLimit';
import { useLanguage } from '../../context/LanguageContext';
import { validateNoInjection } from '../../utils/validation';
import { COMPANY } from '../../utils/constants';
import { MAX_LENGTHS, PATTERNS } from '../../utils/validation';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { SectionTitle, Input, Button } from '../ui';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const { t } = useLanguage();

  // Build validators using translated messages
  const validationRules = {
    name: (v) => {
      if (!v || !v.trim()) return { valid: false, error: t('contact.validation.nameRequired') };
      if (v.length > MAX_LENGTHS.name) return { valid: false, error: t('contact.validation.nameTooLong') };
      if (!PATTERNS.name.test(v)) return { valid: false, error: t('contact.validation.nameInvalid') };
      return { valid: true, error: '' };
    },
    email: (v) => {
      if (!v || !v.trim()) return { valid: false, error: t('contact.validation.emailRequired') };
      if (v.length > MAX_LENGTHS.email) return { valid: false, error: t('contact.validation.emailTooLong') };
      if (!PATTERNS.email.test(v)) return { valid: false, error: t('contact.validation.emailInvalid') };
      return { valid: true, error: '' };
    },
    phone: (v) => {
      if (!v || !v.trim()) return { valid: true, error: '' };
      if (v.length > MAX_LENGTHS.phone) return { valid: false, error: t('contact.validation.phoneTooLong') };
      if (!PATTERNS.phone.test(v)) return { valid: false, error: t('contact.validation.phoneInvalid') };
      return { valid: true, error: '' };
    },
    subject: (v) => {
      if (!v || !v.trim()) return { valid: false, error: t('contact.validation.subjectRequired') };
      return { valid: true, error: '' };
    },
    message: (v) => {
      if (!v || !v.trim()) return { valid: false, error: t('contact.validation.messageRequired') };
      if (v.length < 10) return { valid: false, error: t('contact.validation.messageTooShort', { min: 10 }) };
      if (v.length > MAX_LENGTHS.message) return { valid: false, error: t('contact.validation.messageTooLong', { max: MAX_LENGTHS.message }) };
      return { valid: true, error: '' };
    },
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormValidation(
    { name: '', email: '', phone: '', subject: '', message: '' },
    validationRules
  );

  const { isLimited, cooldownTime, checkRateLimit } = useRateLimit({
    maxRequests: 3,
    windowMs: 60000,
  });

  const onSubmit = (sanitizedData) => {
    if (!checkRateLimit()) return;
    console.log('Formulario enviado (sanitizado):', sanitizedData);
    setSubmitStatus('success');
    setTimeout(() => {
      resetForm();
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <Section id="contacto" dark>
      <Container>
        <SectionTitle
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">{t('contact.infoTitle')}</h3>
            <p className="text-brand-gray leading-relaxed mb-8">{t('contact.infoDescription')}</p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white shadow-sm border border-brand-gray/30 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-brand-gray">{t('contact.labels.email')}</p>
                  <p className="text-black font-medium">{COMPANY.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white shadow-sm border border-brand-gray/30 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-brand-gray">{t('contact.labels.phone')}</p>
                  <p className="text-black font-medium">{COMPANY.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white shadow-sm border border-brand-gray/30 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-brand-gray">{t('contact.labels.location')}</p>
                  <p className="text-black font-medium">{COMPANY.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-brand-gray/30 shadow-sm p-6 md:p-8 space-y-5 rounded-2xl" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label={t('contact.form.name')} name="name" placeholder={t('contact.form.namePlaceholder')} value={values.name} error={errors.name} touched={touched.name} onChange={handleChange} onBlur={handleBlur} required maxLength={100} />
                <Input label={t('contact.form.email')} name="email" type="email" placeholder={t('contact.form.emailPlaceholder')} value={values.email} error={errors.email} touched={touched.email} onChange={handleChange} onBlur={handleBlur} required maxLength={254} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label={t('contact.form.phone')} name="phone" type="tel" placeholder={t('contact.form.phonePlaceholder')} value={values.phone} error={errors.phone} touched={touched.phone} onChange={handleChange} onBlur={handleBlur} maxLength={20} />
                <Input label={t('contact.form.subject')} name="subject" placeholder={t('contact.form.subjectPlaceholder')} value={values.subject} error={errors.subject} touched={touched.subject} onChange={handleChange} onBlur={handleBlur} required maxLength={200} />
              </div>

              <Input label={t('contact.form.message')} name="message" type="textarea" placeholder={t('contact.form.messagePlaceholder')} value={values.message} error={errors.message} touched={touched.message} onChange={handleChange} onBlur={handleBlur} required maxLength={2000} rows={5} />

              {isLimited && (
                <motion.div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {t('contact.form.rateLimited')} {cooldownTime}s
                </motion.div>
              )}

              {submitStatus === 'success' && (
                <motion.div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t('contact.form.success')}
                </motion.div>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={isLimited}>
                {t('contact.form.submit')}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
