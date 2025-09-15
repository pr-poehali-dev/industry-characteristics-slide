import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('')

  const economicData = [
    { sector: 'Промышленность', percentage: 75, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { sector: 'Технологии', percentage: 60, color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { sector: 'Торговля', percentage: 85, color: 'bg-gradient-to-r from-green-500 to-blue-500' },
    { sector: 'Образование', percentage: 70, color: 'bg-gradient-to-r from-purple-500 to-pink-500' }
  ]

  const industryCards = [
    {
      title: 'Лего-заводы',
      description: 'Крупнейшие производственные комплексы империи',
      icon: 'Factory',
      stats: '1,247 заводов',
      growth: '+12%'
    },
    {
      title: 'Энергетика',
      description: 'Современные системы энергоснабжения',
      icon: 'Zap',
      stats: '98% охват',
      growth: '+8%'
    },
    {
      title: 'Транспорт',
      description: 'Развитая логистическая сеть',
      icon: 'Truck',
      stats: '50,000 км',
      growth: '+15%'
    },
    {
      title: 'Инновации',
      description: 'Научно-исследовательские центры',
      icon: 'Lightbulb',
      stats: '340 центров',
      growth: '+25%'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent mb-4">
            Везоградская Империя
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Интерактивная энциклопедия: идеология, экономика и промышленность великой империи
          </p>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Идеология', icon: 'Crown', color: 'from-orange-500 to-red-500' },
            { title: 'Экономика', icon: 'TrendingUp', color: 'from-blue-500 to-purple-500' },
            { title: 'Промышленность', icon: 'Cog', color: 'from-green-500 to-blue-500' }
          ].map((item, index) => (
            <Card 
              key={item.title}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in group ${
                activeSection === item.title ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveSection(activeSection === item.title ? '' : item.title)}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon name={item.icon as any} className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Economic Indicators */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="BarChart3" className="w-6 h-6" />
              Экономические показатели
            </CardTitle>
            <CardDescription>Ключевые секторы экономики Везоградской империи</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {economicData.map((item, index) => (
                <div key={item.sector} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.sector}</span>
                    <Badge variant="secondary">{item.percentage}%</Badge>
                  </div>
                  <Progress 
                    value={item.percentage} 
                    className="h-3"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {industryCards.map((card, index) => (
            <Card 
              key={card.title}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name={card.icon as any} className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {card.growth}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-sm">{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">{card.stats}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Information Accordion */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="BookOpen" className="w-6 h-6" />
              Детальная информация
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="ideology">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                  🏛️ Идеология Везоградской империи
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-muted-foreground">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Основные принципы</h4>
                      <ul className="space-y-2">
                        <li>• Единство через творчество</li>
                        <li>• Инновации как двигатель прогресса</li>
                        <li>• Коллективное созидание</li>
                        <li>• Уважение к традициям</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Социальные ценности</h4>
                      <ul className="space-y-2">
                        <li>• Равные возможности для всех</li>
                        <li>• Образование как основа развития</li>
                        <li>• Экологическая ответственность</li>
                        <li>• Международное сотрудничество</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="economy">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                  💰 Экономическая система
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-muted-foreground">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Смешанная экономика</h4>
                      <p className="text-sm">Сочетание государственного планирования и рыночных механизмов</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Инновационный фокус</h4>
                      <p className="text-sm">15% ВВП инвестируется в исследования и разработки</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Устойчивое развитие</h4>
                      <p className="text-sm">Приоритет экологически чистых технологий</p>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="industry">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                  🏭 Промышленные достижения
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-muted-foreground">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Ключевые отрасли</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <Icon name="Factory" className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <h5 className="font-medium text-foreground">Лего-производство</h5>
                            <p className="text-sm">Автоматизированные заводы с роботизированными линиями</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="Cpu" className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <h5 className="font-medium text-foreground">Высокие технологии</h5>
                            <p className="text-sm">Разработка ИИ и квантовых компьютеров</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="Leaf" className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <h5 className="font-medium text-foreground">Зеленая энергетика</h5>
                            <p className="text-sm">100% возобновляемые источники энергии к 2030 году</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="Rocket" className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <h5 className="font-medium text-foreground">Космические технологии</h5>
                            <p className="text-sm">Лидер в области космических исследований</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Index