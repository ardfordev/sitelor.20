"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

export function Register() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your email below to register your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="unit">Unit</Label>
          <Select name="unit">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Unit</SelectLabel>
                <SelectItem value="ULP">ULP</SelectItem>
                <SelectItem value="UP3">UP3</SelectItem>
                <SelectItem value="UID">UID</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="wilayah">Wilayah</Label>
          <Select name="wilayah">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Wilayah" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>UP3</SelectLabel>
                <SelectItem value="Malang">Malang</SelectItem>
                <SelectItem value="Mojokerto">Mojokerto</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>UID</SelectLabel>
                <SelectItem value="Jawa Timur">Jawa Timur</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Register</Button>
      </CardFooter>
    </Card>
  )
}