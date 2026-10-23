import React from 'react'
import CaseStudyCard from './CaseStudyCard'

export default function CaseStudies() {
  return (
    <section id="experience" className="section-shell scroll-mt-24 py-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="section-title">Engineering Case Studies</h2>
        <p className="section-subtitle">
          Selected professional work focused on maintainability, performance investigation, and
          service integration. Company names and proprietary details are omitted.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CaseStudyCard
          title="Legacy Authentication & Cost Optimization"
          problem="Legacy authentication and user provisioning workflows created unnecessary complexity and reliance on external services, increasing operational costs."
          challenge="The solution needed to work within an existing JavaScript and MongoDB codebase while maintaining compatibility with established user access workflows."
          contribution="Designed and implemented a database-driven authentication and token management solution for BeeFree, improving user provisioning and access management."
          approach="Worked with the existing JavaScript and MongoDB stack to simplify authentication workflows and reduce unnecessary dependencies on external services."
          outcome="Eliminated unnecessary external service costs, generating estimated savings of over €3,000 per month."
          tech="JavaScript • MongoDB • Authentication • Token Management"
        />

        <CaseStudyCard
          title="API Security & Access Control"
          problem="Legacy API endpoints contained authentication and authorization gaps that needed to be addressed to strengthen access control."
          challenge="Improving security across an established system required understanding existing endpoint behavior and implementing controls without unnecessarily disrupting integrations."
          contribution="Investigated, designed, and implemented authentication and authorization mechanisms across legacy API endpoints."
          approach="Reviewed existing endpoint behavior, identified security gaps, and introduced appropriate access control mechanisms within the existing application architecture."
          outcome="Strengthened API access control and improved the security of legacy endpoints while preserving the existing system architecture."
          tech="C# • .NET • REST APIs • Authentication • Authorization"
        />

        <CaseStudyCard
          title="API Performance Investigation"
          problem="A production event-triggering endpoint experienced timeout issues under load, despite isolated requests completing in approximately 179 ms."
          challenge="The performance issue was workload-dependent, requiring investigation beyond isolated requests to understand the request lifecycle and potential sources of overhead."
          contribution="Investigated endpoint latency through log analysis, code-level investigation, and load testing, focusing on unnecessary payload processing and data transfer."
          approach="Analyzed request handling and the surrounding processing flow to identify expensive operations and opportunities to reduce overhead."
          outcome="Identified optimization opportunities and implemented changes targeting unnecessary payload processing and data transfer to improve request handling."
          tech="C# • .NET • MongoDB • RabbitMQ • GELF Logging"
        />

        <CaseStudyCard
          title="Multi-channel Automation & GraphQL Integrations"
          problem="Communication workflows and application integrations required flexible web interfaces, reliable backend services, and reusable API integrations."
          challenge="Supporting evolving customer communication workflows and different application requirements called for a combination of backend orchestration, frontend development, and configurable APIs."
          contribution="Contributed to a multi-channel automation platform supporting SMS, WhatsApp, and email. Also designed a configurable GraphQL integration layer and integrated Strawberry Shake into a .NET marketplace application."
          approach="Worked across C#, .NET, Blazor, MudBlazor, React, TypeScript, Apollo GraphQL, Node.js, and MongoDB to develop frontend features, backend services, and API integrations."
          outcome="Contributed to a production automation platform and reusable GraphQL integrations. Previously, at Mortar Learning, also implemented platform features and led the development team during the final three months, overseeing changes and deployments."
          tech="C# • .NET • Blazor • React • TypeScript • GraphQL • MongoDB"
        />
      </div>
    </section>
  )
}
