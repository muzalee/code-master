import { AssessmentType, HeroHeader } from "@/lib/models/contents"
import { Code2, LayoutTemplate, Terminal } from "lucide-react"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Skill Assessment Simplified`,
  subheader: `Effortless Evaluation. Tailored Recommendations. Swift and Smart.`,
  image: `/hero-img.webp`,
}

export const assessmentTypes: AssessmentType[] = [
  {
    icon: LayoutTemplate,
    code: 'frontend',
    label: 'Frontend Development',
    assesments: [],
  },
  {
    icon: Terminal,
    code: 'backend',
    label: 'Backend Skill',
    assesments: [],
  },
  {
    icon: Code2,
    code: 'framework',
    label: 'Suitable Framework',
    assesments: [],
  }
]