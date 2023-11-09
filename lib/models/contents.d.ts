import { IconKeys } from "@/components/icons"
import { LucideIcon } from "lucide-react"

export type HeroHeader = {
  header: string
  subheader: string
  image: string
}

export type AssessmentType = {
  icon: LucideIcon
  code: string
  label: string
}

export type Assessment = {
  id: number
  question: string
  options: string[]
  answer: number | null
  error: string | null
}