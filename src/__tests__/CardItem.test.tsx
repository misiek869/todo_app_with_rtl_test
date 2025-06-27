import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import CardItem from '../components/CardItem'
import userEvent, { type UserEvent } from '@testing-library/user-event'
