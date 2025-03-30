
# 🔐 Web Security – Essential Concepts & Practices

Understanding web security is crucial for protecting your applications and users. This guide outlines the most important security principles, attacks, and defenses.

---

## 🧱 1. Core Security Principles

- **Confidentiality:** Data should only be visible to the intended user.
- **Integrity:** Data should not be altered without authorization.
- **Availability:** Systems should remain available to legitimate users.
- **Authentication:** Confirming identity (e.g., login).
- **Authorization:** Granting permission based on roles.
- **Non-repudiation:** Ensuring actions cannot be denied.

---

## 🚫 2. Common Web Attacks

### 2.1 Cross-Site Scripting (XSS)
Injecting malicious JS into webpages.

```html
<script>alert('Hacked')</script>
```

**Types:**
- Stored XSS
- Reflected XSS
- DOM-based XSS

**Defenses:**
- Escape user input
- Use Content Security Policy (CSP)
- Sanitize inputs (e.g., DOMPurify)

---

### 2.2 Cross-Site Request Forgery (CSRF)
Forcing a user to perform actions without their consent (while authenticated).

**Defenses:**
- Use **CSRF tokens**
- Use **SameSite cookies**
- Require re-authentication for sensitive actions

---

### 2.3 SQL Injection
Malicious input in SQL queries.

```sql
SELECT * FROM users WHERE username = '' OR 1=1 --';
```

**Defenses:**
- Use parameterized queries/prepared statements
- Validate input

---

### 2.4 Clickjacking
Tricking users into clicking hidden UI using iframes.

**Defenses:**
- Set `X-Frame-Options: DENY` or `SAMEORIGIN`
- Use `frame-ancestors` in CSP

---

### 2.5 Man-in-the-Middle (MitM)
Intercepting communication between client and server.

**Defenses:**
- Enforce HTTPS using HSTS
- Use TLS (SSL) certificates

---

## 🔐 3. HTTP Headers for Security

| Header | Purpose |
|--------|---------|
| `Content-Security-Policy` | Prevent XSS, resource injection |
| `X-Content-Type-Options: nosniff` | Block MIME-sniffing |
| `X-Frame-Options: DENY` | Prevent clickjacking |
| `Strict-Transport-Security` | Enforce HTTPS |
| `Referrer-Policy` | Limit referrer info |
| `Permissions-Policy` | Control features like camera/mic |

---

## 🧼 4. Input Validation & Output Encoding

- Always **sanitize and validate** input on the server.
- Escape HTML, JavaScript, CSS, and URL contexts appropriately.

---

## 🔑 5. Authentication & Authorization

- Use secure libraries like OAuth2, OpenID Connect, Auth0.
- Avoid rolling your own auth logic.
- Store passwords hashed with `bcrypt` or `argon2`.

### Best Practices:
- Enforce strong password policies.
- Enable 2FA (Two-Factor Authentication).
- Use session expiration and token invalidation.

---

## 📦 6. Secure Storage

- Never store plain-text passwords.
- Use secure cookies (`HttpOnly`, `Secure`, `SameSite`).
- Store tokens in `httpOnly` cookies, not `localStorage`.

---

## 🛡️ 7. CORS – Cross-Origin Resource Sharing

Controls which domains can access your APIs.

```http
Access-Control-Allow-Origin: https://example.com
```

**Avoid:** `Access-Control-Allow-Origin: *` on private APIs

---

## 🧾 8. Content Security Policy (CSP)

Mitigates XSS by controlling which sources can load content.

```http
Content-Security-Policy: default-src 'self'; script-src 'self'
```

- Disallows inline scripts by default
- Use nonces or hashes for dynamic content

---

## 🔍 9. Security Tools

- [OWASP ZAP](https://owasp.org/www-project-zap/)
- [Burp Suite](https://portswigger.net/burp)
- [SecurityHeaders.com](https://securityheaders.com/)
- Chrome DevTools → Security tab

---

## 🔐 10. OWASP Top 10 (2023)

1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Identification & Auth Failures
8. Data Integrity Failures
9. Logging & Monitoring Failures
10. Server-Side Request Forgery (SSRF)

See [OWASP.org](https://owasp.org) for full list and mitigation strategies.

---

## ✅ Summary

| Category            | Best Practices                                         |
|---------------------|--------------------------------------------------------|
| Authentication      | Use libraries, hash passwords, use 2FA                |
| Input Validation    | Whitelist + sanitize                                   |
| Output Encoding     | Escape HTML/JS/CSS/URL                                 |
| Secure Headers      | Enable CSP, HSTS, XFO, Referrer Policy                 |
| Cookies             | Use Secure, HttpOnly, SameSite                         |
| HTTPS               | Always enforce                                         |
| Logging             | Log and monitor security events                        |

---

## 📚 Further Reading

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Google Web Fundamentals - Security](https://developers.google.com/web/fundamentals/security)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security.html)

Let me know if you'd like diagrams or visual threat models!
