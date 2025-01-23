import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import GoBackTop from '../../components/GoBackTop';

const Terms = () => {
  const language = i18next.language;
  const { t } = useTranslation();

  return (
    <div className="grid-bg">
      <div
        className="container mx-auto p-6 max-w-4xl"
        lang={language}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <header className="text-center mb-12">
          <h1 className="text-4xl py-1 font-bold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4">
            {t('terms.title')}
          </h1>
          <p className="text-lg text-light-text dark:text-primary-text">
            {t('terms.subtitle')}
          </p>
        </header>

        <main>
          {/* Revision Policy */}
          <section aria-labelledby="revision-policy" className="mb-8">
            <h2
              id="revision-policy"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              1. {t('terms.section1.revisionPolicy')}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section1.numberOfRevisions')}:
              </span>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">
                  {t('terms.section1.starterPackage')}:
                </span>{' '}
                {t('terms.section1.starterPackageDescription')}
              </li>
              <li>
                <span className="font-semibold">
                  {t('terms.section1.professionalPackage')}:
                </span>{' '}
                {t('terms.section1.professionalPackageDescription')}
              </li>
              <li>
                <span className="font-semibold">
                  {t('terms.section1.premiumPackage')}:
                </span>{' '}
                {t('terms.section1.premiumPackageDescription')}
              </li>
            </ul>

            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section1.scopeOfRevisions')}:
              </span>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">
                  {t('terms.section1.minorRevisions')}:
                </span>{' '}
                {t('terms.section1.minorRevisionsDescription')}
              </li>
              <li>
                <span className="font-semibold">
                  {t('terms.section1.majorRevisions')}:
                </span>{' '}
                {t('terms.section1.majorRevisionsDescription')}
              </li>
            </ul>

            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section1.additionalRevisionFees')}:
              </span>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('terms.section1.minorRevisionFee')}</li>
              <li>{t('terms.section1.majorRevisionFee')}</li>
            </ul>
          </section>

          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Payment Policy */}
          <section aria-labelledby="payment-policy" className="mb-8">
            <h2
              id="payment-policy"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              2. {t('terms.section2.paymentPolicy')}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section2.advancePayment')}:
              </span>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('terms.section2.advancePaymentDescription1')}</li>
              <li>{t('terms.section2.advancePaymentDescription2')}</li>
            </ul>

            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section2.paymentMethods')}:
              </span>{' '}
              {t('terms.section2.paymentMethodsDescription')}
            </p>
          </section>

          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Delivery Policy */}
          <section aria-labelledby="delivery-policy" className="mb-8">
            <h2
              id="delivery-policy"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              3. {t('terms.section3.deliveryPolicy')}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section3.deliveryTimelines')}:
              </span>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">
                  {t('terms.section3.starterPackage')}:
                </span>{' '}
                {t('terms.section3.starterPackageTimeline')}
              </li>
              <li>
                <span className="font-semibold">
                  {t('terms.section3.professionalPackage')}:
                </span>{' '}
                {t('terms.section3.professionalPackageTimeline')}
              </li>
              <li>
                <span className="font-semibold">
                  {t('terms.section3.premiumPackage')}:
                </span>{' '}
                {t('terms.section3.premiumPackageTimeline')}
              </li>
            </ul>

            <p className="text-lg text-light-text dark:text-primary-text mb-2">
              <span className="font-semibold">{t('terms.section3.note')}:</span>{' '}
              {t('terms.section3.noteDescription')}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section3.fileDelivery')}:
              </span>{' '}
              {t('terms.section3.fileDeliveryDescription')}
            </p>
          </section>

          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Cancellation and Refund Policy */}
          <section
            aria-labelledby="cancellation-refund-policy"
            className="mb-8"
          >
            <h2
              id="cancellation-refund-policy"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              4. {t('terms.section4.cancellationRefundPolicy')}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section4.beforeWorkBegins')}:
              </span>{' '}
              {t('terms.section4.beforeWorkBeginsDescription')}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section4.afterWorkBegins')}:
              </span>{' '}
              {t('terms.section4.afterWorkBeginsDescription')}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section4.afterDelivery')}:
              </span>{' '}
              {t('terms.section4.afterDeliveryDescription')}
            </p>
          </section>

          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Intellectual Property Policy */}
          <section
            aria-labelledby="intellectual-property-policy"
            className="mb-8"
          >
            <h2
              id="intellectual-property-policy"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              5. {t('terms.section5.intellectualPropertyPolicy')}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section5.clientRights')}:
              </span>{' '}
              {t('terms.section5.clientRightsDescription')}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section5.sevenDesignStudioRights')}:
              </span>{' '}
              {t('terms.section5.sevenDesignStudioRightsDescription')}
            </p>
          </section>

          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Privacy Policy */}
          <section aria-labelledby="privacy-policy" className="mb-8">
            <h2
              id="privacy-policy"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              6. {t('terms.section6.privacyPolicy')}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section6.dataProtection')}:
              </span>{' '}
              {t('terms.section6.dataProtectionDescription')}
            </p>
          </section>

          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Complaints Policy */}
          <section aria-labelledby="complaints-policy" className="mb-8">
            <h2
              id="complaints-policy"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              7. {t('terms.section7.complaintsPolicy')}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section7.filingComplaint')}:
              </span>{' '}
              {t('terms.section7.filingComplaintDescription')}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section7.disputeResolution')}:
              </span>{' '}
              {t('terms.section7.disputeResolutionDescription')}
            </p>
          </section>

          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Policy Amendments */}
          <section aria-labelledby="policy-amendments" className="mb-8">
            <h2
              id="policy-amendments"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              8. {t('terms.section8.policyAmendments')}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section8.rightToAmend')}:
              </span>{' '}
              {t('terms.section8.rightToAmendDescription')}
            </p>
          </section>

          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Acceptance of Terms */}
          <section aria-labelledby="acceptance-of-terms" className="mb-8">
            <h2
              id="acceptance-of-terms"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              9. {t('terms.section9.acceptanceOfTerms')}
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">
                {t('terms.section9.agreement')}:
              </span>{' '}
              {t('terms.section9.agreementDescription')}
            </p>
          </section>

          <hr className="my-6 border-t-2 border-gray-300" />

          {/* Contact Information */}
          <section aria-labelledby="contact-info" className="mb-8">
            <h2
              id="contact-info"
              className="text-2xl font-semibold bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent mb-4"
            >
              10. {t('terms.section10.contactInformation')}
            </h2>
            <p className="text-lg mb-2">
              <span className="bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent font-semibold">
                {t('terms.section10.email')}:
              </span>{' '}
              <a
                href="mailto:Sevendesign.me@gmail.com"
                className="bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent"
              >
                Sevendesign.me@gmail.com
              </a>
            </p>
            <p className="text-lg mb-2">
              <span className="bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent font-semibold">
                {t('terms.section10.phone')}:
              </span>{' '}
              <a
                href="tel:+201030030397"
                className="bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent"
              >
                +201030030397
              </a>
            </p>
            <p className="text-lg mb-2">
              <span className="bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent font-semibold">
                {t('terms.section10.website')}:
              </span>{' '}
              <a
                href="http://www.7-design.net"
                className="bg-gradient-to-t-light dark:bg-gradient-to-t-orange bg-clip-text text-transparent"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.7-design.net
              </a>
            </p>
          </section>
        </main>
      </div>

      <GoBackTop />
    </div>
  );
};

export default Terms;
