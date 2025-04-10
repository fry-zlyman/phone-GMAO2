import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() {
  runApp(const GMAOApp());
}

class GMAOApp extends StatelessWidget {
  const GMAOApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GMAO Solution',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [
        Locale('fr'),
        Locale('en'),
      ],
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('GMAO Solution'),
      ),
      body: const Center(
        child: Text('Bienvenue sur GMAO Solution'),
      ),
    );
  }
}