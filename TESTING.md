# Testing Checklist

❌

✅

## Overview

This document records the manual testing performed for the AI Vehicle Inspector application.

**Branch:** `feature/testing-and-polish`

---

# 1. Image Upload

| Test | Status | Notes |
|------|:------:|------|
| Browse image upload | ✅ | |
| Drag and drop upload | ✅ | |
| Replace image using Browse | ✅ | |
| Replace image using Drag & Drop | ✅ | |
| Cancel file picker | ✅ | |
| Upload JPG image | ✅ | |
| Upload PNG image | ✅ | |
| Upload JPEG image | ✅ | |

---

# 2. AI Analysis

| Test | Status | Notes |
|------|:------:|------|
| Analyse selected image | ✅ | |
| Scan animation appears | ✅ | |
| Analyse button disabled while loading | ✅ | |
| Scan animation stops after prediction | ✅ | |
| Prediction updates correctly | ✅ | |

---

# 3. Prediction Results

| Test | Status | Notes |
|------|:------:|------|
| Vehicle Type displayed | ✅ | |
| Make displayed correctly | ✅ | |
| Model displayed correctly | ✅ | |
| Confidence progress bar displayed | ✅ | |
| Confidence percentage displayed | ✅ | |
| AI reasoning displayed | ✅ | |
| Long AI reasoning wraps correctly | ✅ | |

---

# 4. Error Handling

| Test | Status | Notes |
|------|:------:|------|
| Backend unavailable | ✅ | |
| Invalid image selected | ❌ | Non-image files can be selected and are treated as images. No validation message is displayed. |
| Large image upload | ☐ | |
| Error message displayed | ☐ | |
| User can analyse again after an error | ☐ | |

---

# 5. Responsive Design

| Test | Status | Notes |
|------|:------:|------|
| Mobile layout | ☐ | |
| Tablet layout | ☐ | |
| Desktop layout | ☐ | |
| Buttons remain usable | ☐ | |
| Image scales correctly | ☐ | |

---

# 6. Accessibility & UX

| Test | Status | Notes |
|------|:------:|------|
| Keyboard navigation | ☐ | |
| Focus indicators visible | ☐ | |
| Disabled buttons behave correctly | ☐ | |
| Long filename displays correctly | ☐ | |
| Multiple uploads work correctly | ☐ | |
| Overall spacing looks consistent | ☐ | |

---

# Issues Found

# Issues Found

| ID | Test | Description | Status | Commit |
|----|------|-------------|:------:|--------|
| 001 | Invalid image selected | JSON/CSV files can be uploaded and previewed as images. No validation message displayed. | ✅ Fixed | |

---

# Bug Fixes

| Commit | Description |
|---------|-------------|
| fix: validate uploaded file types before selection | Added client-side validation to prevent non-image files from being selected and previewed. |
| | |

---

# Final Result

- [ ] All manual tests completed
- [ ] All identified issues resolved
- [ ] Application ready for merge
