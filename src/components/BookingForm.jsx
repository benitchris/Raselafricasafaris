import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingForm.css';

const safariOptions = [
    'Gorilla Trekking (Bwindi)',
    'Masai Mara Big 5 (Kenya)',
    'Best of East Africa (7 Days)',
    'Serengeti Migration (Tanzania)',
    'Rwanda & Congo Trek',
    'Tanzania Honeymoon & Zanzibar',
    'Customized Safari (Tailor-made)',
];

export default function BookingForm() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        safari: '',
        travelers: '2',
        date: '',
        message: '',
    });

    useEffect(() => {
        if (location.state) {
            if (location.state.safari) {
                if (safariOptions.includes(location.state.safari)) {
                    setFormData(prev => ({ ...prev, safari: location.state.safari }));
                } else {
                    setFormData(prev => ({
                        ...prev,
                        safari: 'Customized Safari (Tailor-made)',
                        message: prev.message 
                            ? prev.message 
                            : `Hello! I'm interested in booking a custom tour centered around: ${location.state.safari}. Please share itinerary suggestions.`
                    }));
                }
            }
            if (location.state.message) {
                setFormData(prev => ({ ...prev, message: location.state.message }));
            }
        }
    }, [location.state]);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setStatus('sending');

        // We let the HTML form submission happen natively to the iframe.
        // We just watch for the success state.
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                safari: '',
                travelers: '2',
                date: '',
                message: '',
            });
            setTimeout(() => setStatus(''), 6000);
        }, 1000);
    };

    // Split date for Google Form hidden inputs
    const dateParts = formData.date ? formData.date.split('-') : ['', '', ''];
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const safariMap = {
        'Gorilla Trekking (Bwindi)': 'gorilla trekking (bwindi)',
        'Masai Mara Big 5 (Kenya)': 'masai mara big 5(kenya)',
        'Best of East Africa (7 Days)': 'best of east africa(7days)',
        'Serengeti Migration (Tanzania)': 'serengeti migration (tanzania)',
        'Rwanda & Congo Trek': 'rwanda and congo trek',
        'Tanzania Honeymoon & Zanzibar': 'tanzania honeymoon and zanzibar',
        'Customized Safari (Tailor-made)': 'customized safari tailor made'
    };

    const exactSafariValue = safariMap[formData.safari] || formData.safari;

    return (
        <section className="booking section" id="contact">
            {/* Hidden iframe to prevent page redirect */}
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>

            <div className="container">
                <div className="booking-grid">
                    {/* Form Left - Info */}
                    <div className="booking-info">
                        <span className="section-label">Book Your Safari</span>
                        <h2 className="section-title">Ready for Your <span>African Adventure?</span></h2>
                        <p className="section-subtitle">
                            Fill out the form below and our safari specialists will build a personalized
                            itinerary for you. We'll reach out to confirm availability and discuss
                            customizations to ensure your dream journey.
                        </p>

                        <div className="booking-contacts">
                            <div className="contact-item">
                                <div className="contact-icon"><i className="fab fa-whatsapp"></i></div>
                                <div>
                                    <div className="contact-label">Quick Chat</div>
                                    <a href="https://wa.me/256755623922" target="_blank" rel="noopener noreferrer" className="contact-value">+256 755 623 922</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                                <div>
                                    <div className="contact-label">Email Us</div>
                                    <a href="mailto:info@raselafricasafaris.com" className="contact-value">info@raselafricasafaris.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Right - The Form */}
                    <div className="booking-card">
                        <form
                            action="https://docs.google.com/forms/d/e/1FAIpQLSdykCIb09fbKKPX_JcnGDXeOCIRDYjVhKnBzSxWTDBmWIjTWA/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                            className="booking-form"
                        >
                            {/* Hidden Inputs for Google Form IDs */}
                            <input type="hidden" name="entry.698559371" value={formData.name} />
                            <input type="hidden" name="entry.611474800" value={formData.email} />
                            <input type="hidden" name="entry.1759630329" value={formData.phone} />
                            <input type="hidden" name="entry.1376761591" value={exactSafariValue} />
                            <input type="hidden" name="entry.217875519" value={formData.travelers} />
                            <input type="hidden" name="entry.1355394550_year" value={year} />
                            <input type="hidden" name="entry.1355394550_month" value={month} />
                            <input type="hidden" name="entry.1355394550_day" value={day} />
                            <input type="hidden" name="entry.2032248376" value={formData.message} />

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone / WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="+1 234 567 890"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="safari">Interested In</label>
                                    <select
                                        id="safari"
                                        name="safari"
                                        required
                                        value={formData.safari}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Select a Safari</option>
                                        {safariOptions.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="travelers">Number of People</label>
                                    <input
                                        type="number"
                                        id="travelers"
                                        name="travelers"
                                        min="1"
                                        required
                                        value={formData.travelers}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Arrival Date (Approx.)</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Special Requests / Questions</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Tell us about any specific interests, dietary needs, or budget preferences..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
                                {status === 'sending' ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i> Sending Enquiry...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-paper-plane"></i> Send Enquiry
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="form-success">
                                    <i className="fas fa-check-circle"></i>
                                    Thank you! We've received your enquiry and will be in touch within 24 hours.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-error">
                                    <i className="fas fa-exclamation-circle"></i>
                                    Something went wrong. Please try again or contact us via WhatsApp.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
