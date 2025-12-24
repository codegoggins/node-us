<!-- PHASE 1 – MODERN LEARNING PLATFORM -->

1. Platform Foundation & Core Architecture
   1.1 Modular backend architecture (service-ready)
   1.2 Environment separation (dev, staging, prod)
   1.3 Centralized configuration and secrets management
   1.4 Audit logging for critical actions
   1.5 Feature flag support

2. Authentication, Authorization & RBAC
   2.1 Login and Signup
   2.1.1 OTP-based authentication
   2.1.2 Email and password authentication
   2.1.3 Google OAuth login/signup
   2.1.4 Optional two-factor authentication

2.2 Role-Based Access Control (RBAC)
2.2.1 Default roles - Admin - Teacher - Learner
2.2.2 Admin-created custom roles - Approver - Reviewer - Moderator

2.3 Account Status Management
2.3.1 Active
2.3.2 Suspended
2.3.3 Under Review
2.3.4 Status enforced across APIs and UI

3. User Profiles & Dashboards
   3.1 Learner Profile
   3.1.1 Purchased courses
   3.1.2 Course progress tracking
   3.1.3 Ratings and comments history

3.2 Teacher Profile
3.2.1 Created courses
3.2.2 Learner enrollments per course
3.2.3 Revenue and performance analytics

3.3 Admin Dashboard
3.3.1 User management
3.3.2 Role assignment
3.3.3 Course moderation
3.3.4 Flagged content review

4. Course Creation & Management (Teacher Flow)
   4.1 Multi-step Course Creation
   4.1.1 Course basic details (title, description, category)
   4.1.2 Upload course videos
   4.1.3 Add notes and resources
   4.1.4 Pricing configuration
   4.1.5 Save as draft or submit for review

4.2 Course Content Structure
4.2.1 Multiple videos per course
4.2.2 Video-level descriptions and notes

4.3 Course Status Lifecycle
4.3.1 Draft
4.3.2 Pending Review
4.3.3 Published
4.3.4 Blocked

5. Media Upload, Processing & Security
   5.1 Secure Video Upload
   5.1.1 Direct upload using signed URLs
   5.1.2 Chunked uploads support

5.2 Media Processing Service (Asynchronous)
5.2.1 Video transcoding into multiple qualities
5.2.2 Video compression
5.2.3 Thumbnail generation
5.2.4 Non-blocking UI during processing

5.3 Video Access Security
5.3.1 Signed and expiring URLs
5.3.2 Access restricted to enrolled learners

5.4 Video Status Lifecycle
5.4.1 Uploading
5.4.2 Processing
5.4.3 Flagged
5.4.4 Blocked
5.4.5 Failed
5.4.6 Ready

6. Content Moderation & Compliance
   6.1 Automated Content Moderation
   6.1.1 Video scanning using AWS Rekognition
   6.1.2 Detection of unsafe or inappropriate content

6.2 Admin Moderation Workflow
6.2.1 View flagged videos in admin dashboard
6.2.2 Approve or block individual videos
6.2.3 Block entire courses if required
6.2.4 Suspend teacher accounts if necessary

7. Course Discovery, Cart & Purchase
   7.1 Course listing and browsing
   7.1.1 Search functionality
   7.1.2 Category and filter options

7.2 Cart System
7.2.1 Add multiple courses to cart
7.2.2 Remove courses from cart
7.2.3 Price breakdown

7.3 Checkout & Payment
7.3.1 Razorpay payment integration
7.3.2 Payment verification
7.3.3 Failure and retry handling

8. Orders, Access & Entitlements
   8.1 Order Management
   8.1.1 Single order with multiple courses
   8.1.2 Order history

8.2 Course Access Control
8.2.1 Access granted after successful payment
8.2.2 Access revoked if course is blocked or refunded

9. Learning Experience (Post-Purchase)
   9.1 Course Consumption
   9.1.1 Video player with quality selection
   9.1.2 Resume from last watched position

9.2 Engagement Features
9.2.1 Comments and nested comments
9.2.2 Likes and replies
9.2.3 Course ratings and reviews

10. Analytics & Reporting
    10.1 Teacher Analytics
    10.1.1 Course enrollments
    10.1.2 Revenue tracking
    10.1.3 Video engagement metrics

10.2 Admin Analytics
10.2.1 Platform revenue overview
10.2.2 Active users metrics
10.2.3 Course approval and moderation reports

11. Services Architecture
    11.1 Core Application Service
    11.1.1 Authentication and authorization
    11.1.2 User management
    11.1.3 Course management
    11.1.4 Orders and payments
    11.1.5 Comments and ratings

11.2 Media Processing Service
11.2.1 Video transcoding jobs
11.2.2 Content moderation jobs
11.2.3 Asynchronous queue processing
11.2.4 Retry and failure handling

<!-- PHASE 2 -->

12. Future Enhancements
    12.1 AI Course Summarization
    12.1.1 Automatic summaries per course and video

12.2 Transcription and Localization
12.2.1 Speech-to-text transcription
12.2.2 Multi-language subtitles
12.2.3 Audio generation in multiple languages
