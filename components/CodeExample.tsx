interface CodeExampleProps {
  code: string;
  title?: string;
}

export function CodeExample({ code, title }: CodeExampleProps) {
  return (
    <div className="mb-6">
      {title && (
        <p className="text-sm font-bold text-gray-700 mb-2">{title}</p>
      )}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
