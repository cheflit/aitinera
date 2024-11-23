'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { format } from 'date-fns'
import { CalendarIcon, MapPin, Umbrella, Palmtree, Building2, PartyPopper, UtensilsCrossed, Tent, Wallet, CreditCard, DollarSign, MessageSquare } from 'lucide-react'

const vibes = [
    { id: 'relax', label: 'Relax', icon: Umbrella },
    { id: 'nature', label: 'Nature', icon: Palmtree },
    { id: 'city-sightseeing', label: 'City Sightseeing', icon: Building2 },
    { id: 'events', label: 'Events', icon: PartyPopper },
    { id: 'foodie', label: 'Foodie', icon: UtensilsCrossed },
    { id: 'adventurous', label: 'Adventurous', icon: Tent },
]

const budgets = [
    { id: 'budget-friendly', label: 'Budget-friendly', icon: Wallet },
    { id: 'comfortable', label: 'Comfortable', icon: CreditCard },
    { id: 'luxury', label: 'Luxury', icon: DollarSign },
]

export default function TripPlannerForm() {
    const router = useRouter()
    const [destination, setDestination] = useState('')
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [selectedVibes, setSelectedVibes] = useState<string[]>([])
    const [budget, setBudget] = useState('')
    const [additionalDetails, setAdditionalDetails] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!destination || !startDate || !endDate || selectedVibes.length === 0 || !budget) {
            alert('Please fill in all required fields')
            return
        }
        console.log({ destination, startDate, endDate, selectedVibes, budget, additionalDetails })
        router.push('/planning') // Redirect to a planning page (you'll need to create this)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
            <div>
                <Label htmlFor="destination" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Destination
                </Label>
                <Input
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where do you want to go?"
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        Start Date
                    </Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                {startDate ? format(startDate, 'PPP') : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <Label className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        End Date
                    </Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                {endDate ? format(endDate, 'PPP') : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            <div>
                <Label className="flex items-center gap-2">Vibes (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    {vibes.map((vibe) => (
                        <div key={vibe.id} className="flex items-center space-x-2">
                            <Checkbox
                                id={vibe.id}
                                checked={selectedVibes.includes(vibe.id)}
                                onCheckedChange={(checked) => {
                                    setSelectedVibes(
                                        checked
                                            ? [...selectedVibes, vibe.id]
                                            : selectedVibes.filter((v) => v !== vibe.id)
                                    )
                                }}
                            />
                            <Label htmlFor={vibe.id} className="flex items-center gap-2">
                                {vibe.icon && <vibe.icon className="w-4 h-4" />}
                                {vibe.label}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Label className="flex items-center gap-2">Budget</Label>
                <RadioGroup value={budget} onValueChange={setBudget} className="flex space-x-4 mt-2">
                    {budgets.map((budgetOption) => (
                        <div key={budgetOption.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={budgetOption.id} id={budgetOption.id} />
                            <Label htmlFor={budgetOption.id} className="flex items-center gap-2">
                                {budgetOption.icon && <budgetOption.icon className="w-4 h-4" />}
                                {budgetOption.label}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            <div>
                <Label htmlFor="additionalDetails" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Additional Details
                </Label>
                <Textarea
                    id="additionalDetails"
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                    placeholder="Any other details you'd like to include in your trip plan?"
                    className="mt-2"
                />
            </div>

            <Button type="submit" className="w-full">Let&apos;s Plan It!</Button>
        </form>
    )
}
