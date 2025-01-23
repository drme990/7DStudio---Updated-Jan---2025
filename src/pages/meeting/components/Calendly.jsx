import { useEffect, useRef } from 'react';

const Calendly = () => {
  const isScriptLoaded = useRef(false);
  const isWidgetInitialized = useRef(false);

  useEffect(() => {
    const initializeCalendlyWidget = () => {
      if (window.Calendly && !isWidgetInitialized.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/drmohamed990/15min?hide_event_type_details=1&hide_gdpr_banner=1',
          parentElement: document.getElementById('calendly-widget'),
          prefill: {},
          utm: {},
        });
        isWidgetInitialized.current = true;
      }
    };

    const loadCalendlyScript = () => {
      if (!isScriptLoaded.current) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          isScriptLoaded.current = true;
          initializeCalendlyWidget();
        };
        document.body.appendChild(script);
      } else {
        initializeCalendlyWidget();
      }
    };

    loadCalendlyScript();

    return () => {
      if (isScriptLoaded.current && !isWidgetInitialized.current) {
        const scriptElement = document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        );
        if (scriptElement) scriptElement.remove();
      }
    };
  }, []);

  return (
    <div id="calendly-widget" style={{ minWidth: '320px', height: '700px' }} />
  );
};

export default Calendly;
