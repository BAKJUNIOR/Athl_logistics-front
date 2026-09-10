// Page "Recherche" : recherche interne simple sur le contenu du site (pages, services, équipe, emplois).
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SEARCH_INDEX } from '../../../infrastructure/data/search-index.data';
import { SearchCategory } from '../../../domain/search-result.entity';
import { normalizeText } from '../../../../../core/utils/text.util';

@Component({
  selector: 'app-search',
  imports: [RouterLink],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  private readonly route = inject(ActivatedRoute);

  readonly query = signal(this.route.snapshot.queryParamMap.get('q') ?? '');

  readonly results = computed(() => {
    const q = normalizeText(this.query().trim());
    if (!q) return [];
    return SEARCH_INDEX.filter((entry) => normalizeText(`${entry.title} ${entry.excerpt}`).includes(q));
  });

  readonly resultsByCategory = computed(() => {
    const groups = new Map<SearchCategory, ReturnType<typeof this.results>>();
    for (const result of this.results()) {
      const bucket = groups.get(result.category) ?? [];
      bucket.push(result);
      groups.set(result.category, bucket);
    }
    return Array.from(groups.entries()).map(([category, items]) => ({ category, items }));
  });

  readonly countLabel = computed(() => {
    const count = this.results().length;
    return `${count} résultat${count > 1 ? 's' : ''}`;
  });

  clear(): void {
    this.query.set('');
  }
}
