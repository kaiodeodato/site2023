import React from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, Badge, Card } from 'flowbite-react'

export default function CaseStudyCard({
  title,
  problem,
  challenge,
  contribution,
  approach,
  outcome,
  tech,
  isDraft = false,
}) {
  const techList = tech.split('•').map((item) => item.trim()).filter(Boolean)

  return (
    <Card className="surface-card flex h-full w-full flex-col">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="gradient-text text-xl font-bold md:text-2xl">{title}</h3>
        {isDraft && (
          <Badge color="warning">Draft</Badge>
        )}
      </div>

      <Accordion collapseAll className="mt-2 border-none !divide-slate-700">
        <AccordionPanel>
          <AccordionTitle className="!bg-transparent !px-0 !text-slate-100 hover:!bg-slate-800/60 focus:!ring-0 focus:!ring-offset-0">
            Problem &amp; challenge
          </AccordionTitle>
          <AccordionContent className="!bg-transparent !px-0">
            <p className="mb-3 text-slate-300">
              <span className="font-semibold text-slate-100">Problem: </span>{problem}
            </p>
            <p className="text-slate-300">
              <span className="font-semibold text-slate-100">Challenge: </span>{challenge}
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle className="!bg-transparent !px-0 !text-slate-100 hover:!bg-slate-800/60 focus:!ring-0 focus:!ring-offset-0">
            Contribution &amp; approach
          </AccordionTitle>
          <AccordionContent className="!bg-transparent !px-0">
            <p className="mb-3 text-slate-300">
              <span className="font-semibold text-slate-100">Contribution: </span>{contribution}
            </p>
            <p className="text-slate-300">
              <span className="font-semibold text-slate-100">Approach: </span>{approach}
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle className="!bg-transparent !px-0 !text-slate-100 hover:!bg-slate-800/60 focus:!ring-0 focus:!ring-offset-0">
            Outcome
          </AccordionTitle>
          <AccordionContent className="!bg-transparent !px-0">
            <p className="text-slate-300">{outcome}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <div className="mt-2 flex flex-wrap gap-2 border-t border-slate-700 pt-4">
        {techList.map((item) => (
          <Badge key={item} color="gray" className="!bg-slate-800 !text-slate-200 font-normal">
            {item}
          </Badge>
        ))}
      </div>
    </Card>
  )
}
