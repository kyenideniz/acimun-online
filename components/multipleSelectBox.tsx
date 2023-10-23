"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { CommandList } from "@/components/ui/command"

import { cn } from "@/lib/utils"
import {
  Command as CommandPrimitive,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"

import { useState, useRef, useCallback, type KeyboardEvent } from "react"
import { DropdownMenuItem } from "./ui/dropdown-menu"

export type Option = Record<"value" | "label", string> & Record<string, string>

let mainSub: String;
let committee: String;
let resolutionNo: String;
let questionOf: String;
let coSubs: String;

type SelectBoxProps = {
    frameworks?: Array<any>;
    options: Option[];
    emptyMessage: string;
    val?: Option;
    onValueChange?: (value: Option) => void;
    isLoading?: boolean;
    disabled?: boolean;
    placeholder?: string;

}
export const MultipleSelectBox: React.FC<SelectBoxProps> = ({
    frameworks,
    options,
    emptyMessage,
    val,
    onValueChange,
    disabled,
    isLoading = false,
  }) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<Option>(val as Option)
  const [inputValue, setInputValue] = useState<string>(val?.label || "")
  
  let selectedList: any = [];

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (!input) {
        return
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true)
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find((option) => option.label === input.value)
        if (optionToSelect) {
          setSelected(optionToSelect)
          onValueChange?.(optionToSelect)
          selectedList.push(selected?.label)
          console.log(selectedList)
        }
      }

      if (event.key === "Escape") {
        input.blur()
      }
    },
    [isOpen, options, onValueChange]
  )

  const handleBlur = useCallback(() => {
    setOpen(false)
    setInputValue(selected?.label)
  }, [selected])

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label)

      setSelected(selectedOption)
      onValueChange?.(selectedOption)

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur()
      }, 0)
    },
    [onValueChange]
  )

  return (
    <CommandPrimitive onKeyDown={handleKeyDown} className="w-[200px]">
          <div className="border rounded-xl font-body text-normal">
              <CommandInput
                  ref={inputRef}
                  value={inputValue}
                  onValueChange={isLoading ? undefined : setInputValue}
                  onBlur={handleBlur}
                  onFocus={() => setOpen(true)}
                  placeholder="Search"
                  disabled={disabled}
                  className="font-body text-2xl z-0" />
          </div>
          <div className="mt-1 w-[200px] bg-stone-50">
              {isOpen ? (
                  <div className=" w-full bg-stone-50 outline-none animate-in fade-in-0 font-body text-xl">
                      <CommandList className="ring bg-stone-50 rounded-lg">
                        {isLoading ? (
                          <div className="">
                              <Skeleton className="w-[200px]" />
                          </div>
                              
                        ) : null}
                        <ScrollArea className="z-10 h-36 w-[200px] absolute rounded-md border">
                          {options.length > 0 && !isLoading ? (
                              <CommandGroup className="w-[200px] bg-stone-50 z-10">
                                  {options.map((option) => {
                                      const isSelected = selected?.value === option.value
                                      return (
                                          <CommandItem
                                              key={option.value}
                                              value={option.label}
                                              onMouseDown={(event) => {
                                                  event.preventDefault()
                                                  event.stopPropagation()
                                              } }
                                              onSelect={() => handleSelectOption(option)}
                                              className={cn("items-center gap-2 w-full hover:bg-stone-200 text-lg", !isSelected ? "pl-8 bg-stone-50" : null)}
                                          >
                                            {isSelected ? <Check className="w-4" /> : null}
                                            {option.label}
                                            {selectedList}
                                          </CommandItem>
                                      )
                                  })}
                              </CommandGroup>
                          ) : null}
                        </ScrollArea>
                        {!isLoading ? (
                          <CommandPrimitive className="select-none rounded-sm px-2 py-3 text-sm text-center">
                            {emptyMessage}
                          </CommandPrimitive>
                      ) : null}
                    </CommandList>
                </div>
              ) : null}
          </div>
    </CommandPrimitive> 
  )
}