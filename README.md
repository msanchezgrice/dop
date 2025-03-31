# PM Agent Website

This is the front-end web application for PM Agent, an AI-powered project management assistant.

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Authentication**: JWT with cookie storage
- **API Client**: Custom fetch wrapper
- **UI Components**: Custom components with Headless UI
- **Animations**: Framer Motion

## Getting Started

1. **Install dependencies**:

```bash
npm install
# or
yarn install
```

2. **Run the development server**:

```bash
npm run dev
# or
yarn dev
```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser** to see the result.

## Project Structure

- `/src/app`: Pages and routes using Next.js App Router
- `/src/components`: Reusable UI components
- `/src/utils`: Utility functions and constants
- `/public`: Static assets like images

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
OPENAI_API_KEY=your_openai_api_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT
